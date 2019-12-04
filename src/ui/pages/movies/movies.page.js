import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovies, getMovie } from "../../../actions/movies";

const mapStateToProps = state => {
  const { collection, currentMovie } = state.movies;
  return {
    collection,
    currentMovie,
  };
};

const mapDispatchToProps = {
  getMovies,
  getMovie,
};

const MoviesPage = props => {
  const { getMovies, currentMovie } = props;

  useEffect(() => {
    getMovies("https://api.themoviedb.org/4/list/126912");
  }, []);

  return <div className="movies"> Movies Page =3</div>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
