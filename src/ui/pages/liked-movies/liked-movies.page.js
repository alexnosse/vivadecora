import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../../../actions/movies";
import moment from "moment";

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

const momentDateFormat = "YYYY-MM-DD hh:mm:ss";
const LikedMoviesPage = ({ collection }) => {
  const moviesRender = () => {
    return collection
      .filter(item => item.liked)
      .sort((a, b) => {
        const date1 = moment(a.dateUpdated, momentDateFormat);
        const date2 = moment(b.dateUpdated, momentDateFormat);
      })
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
      Liked Movies Page =3
      {moviesRender()}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikedMoviesPage);
