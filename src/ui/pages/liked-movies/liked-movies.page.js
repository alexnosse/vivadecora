import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { getMovies } from "../../../actions/movies";

import "./liked-movies.page.scss";
import filled from "../../../assets/images/favorite_filled.png";
import heart from "../../../assets/images/favorite.png";

const mapStateToProps = state => {
  const { collection } = state.movies;
  return {
    collection,
  };
};

const mapDispatchToProps = {
  getMovies,
};

const momentDateFormat = "YYYY-MM-DD hh:mm:ss";
const renderHearts = movie => {
  if (movie) {
    const filledCount = Math.ceil(movie.vote_average / 2);
    let i = 0;
    let hearts = [];
    while (i < 5) {
      hearts.push(
        <img
          key={i}
          src={i < filledCount ? filled : heart}
          alt={`Média de Votos ${filledCount} de 5`}
        />
      );
      i++;
    }

    return hearts;
  }
};

const LikedMoviesPage = ({ collection, liked }) => {
  const moviesRender = () => {
    return collection
      .filter(item => {
        if (liked) {
          return item.liked;
        } else {
          return item.disliked;
        }
      })
      .sort((a, b) => {
        const date1 = moment(a.dateUpdated, momentDateFormat);
        const date2 = moment(b.dateUpdated, momentDateFormat);
        const diff = date1.diff(date2, "minutes");
        return diff > 0 ? -1 : 1;
      })
      .map(movie => {
        const background = {
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${
            movie.poster_path
          })`,
        };
        return (
          <li className="movie_item" key={movie.id} style={background}>
            <div className="backdrop" />
            <h5>{movie.title}</h5>
            <div className="hearts">{renderHearts(movie)}</div>
          </li>
        );
      });
  };

  return (
    <div className="movies-container">
      <h3>{`Filmes ${liked ? "" : "Não"} Curtidos`}</h3>
      <ul>{moviesRender()}</ul>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikedMoviesPage);
