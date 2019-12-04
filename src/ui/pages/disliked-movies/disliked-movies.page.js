import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../../actions/movies";

const mapStateToProps = state => {
  const { collection, currentMovie } = state.movies;
  return {
    collection,
    currentMovie,
  };
};

const mapDispatchToProps = {
  getMovies,
};

const DislikedMoviesPage = ({ collection }) => {
  const moviesRender = () => {
    return collection
      .filter(item => item.disliked)
      .map(item => {
        return (
          <li className="movie_item" key={item.id}>
            {item.title}
          </li>
        );
      });
  };

  return (
    <div className="movies">
      {" "}
      Disliked Movies Page =3
      {moviesRender()}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DislikedMoviesPage);
