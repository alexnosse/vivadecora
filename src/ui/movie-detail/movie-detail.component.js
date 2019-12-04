import React from "react";
import { connect } from "react-redux";

import "./movie-detail.component.scss";
import placeholder from "../../assets/images/placeholder.png";
import moment from "moment";
import Hearts from "../hearts/hearts.component";

const mapStateToProps = state => {
  const { genres } = state.genres;
  return {
    genres,
  };
};

const MovieDetail = ({ movie, onClickClose, show, genres }) => {
  const shouldShow = `movie-detail ${show ? " -show " : ""}`;

  if (movie) {
    const date = moment(movie.release_date, "YYYY-MM-DD");

    const background = {
      backgroundImage: `url(${
        movie && movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : placeholder
      })`,
    };

    const genresRender = [
      genres
        .filter(g => movie.genre_ids.indexOf(g.id) > -1)
        .map(g => g.name.toUpperCase()),
    ]
      .join()
      .replace(/,/g, "/");

    return (
      <div className={shouldShow}>
        <div className="backdrop">
          <div className="modal">
            <button
              className="close"
              type="button"
              onClick={() => {
                onClickClose();
              }}
            >
              &#10006;
            </button>
            <div className="modal-header" />
            <div className="modal-content">
              <div className="image" style={background} />
              <h2>{movie.title}</h2>
              <span className="date-genre">
                {date.format("YYYY")} - {genresRender}
              </span>
              <span className="date-genre">{movie.media_type}</span>
              <div className="rating-container">
                <Hearts movie={movie} isContrast={true} />
                <div className="counter">({movie.vote_count} Avaliações)</div>
              </div>

              <span className="sinopsis-container">{movie.overview}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default connect(
  mapStateToProps,
  {}
)(MovieDetail);
