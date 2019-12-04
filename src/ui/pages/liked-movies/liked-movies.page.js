import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import { getMovies } from "../../../actions/movies";

import "./liked-movies.page.scss";
import Hearts from "../../hearts/hearts.component";
import camera from "../../../assets/images/video-camera-vazio.png";

const mapStateToProps = state => {
  const { collection } = state.movies;
  return {
    collection,
  };
};

const momentDateFormat = "YYYY-MM-DD hh:mm:ss";

const LikedMoviesPage = ({ collection, liked }) => {
  let movies = [];
  const moviesRender = () => {
    movies = collection
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
            <Hearts movie={movie} />
          </li>
        );
      });
  };

  moviesRender();

  return (
    <div className="movies-container">
      <h3>{`Filmes ${liked ? "" : "Não"} Curtidos`}</h3>
      {movies.length > 0 && <ul>{movies}</ul>}
      {movies.length === 0 && (
        <div className="no-movies">
          <img src={camera} />
          <br />
          <h3> NENHUM FILME</h3>
        </div>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  {}
)(LikedMoviesPage);
