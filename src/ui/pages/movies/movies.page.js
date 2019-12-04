import React, { useState } from "react";
import { connect } from "react-redux";
import { getMovies, likeMovie, dislikeMovie } from "../../../actions/movies";
import MovieCard from "../../movie-card/movie-card.component";

const mapStateToProps = state => {
  const { collection } = state.movies;
  return {
    collection,
  };
};

const mapDispatchToProps = {
  getMovies,
  likeMovie,
  dislikeMovie,
};

const MoviesPage = props => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { collection, likeMovie, dislikeMovie, onClickOpenModal } = props;

  let movies = collection.filter(item => !item.liked && !item.disliked) || [];

  const nextMovie = () => {
    if (currentIndex < movies.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const moviesRender = () => {
    const movie = movies[currentIndex];
    if (movie) {
      return (
        <MovieCard
          movie={movie}
          onClickSinopsis={() => {
            onClickOpenModal(movie);
          }}
          onClickLike={() => {
            likeMovie(movie.id);
            nextMovie();
          }}
          onClickDislike={() => {
            dislikeMovie(movie.id);
            nextMovie();
          }}
          onClickSkip={() => {
            nextMovie();
          }}
        />
      );
    }
  };

  return <div className="movies"> {moviesRender()}</div>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
