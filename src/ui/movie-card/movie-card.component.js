import React from "react";
import "./movie-card.component.scss";
import filled from "../../assets/images/favorite_filled.png";
import heart from "../../assets/images/favorite.png";
import like from "../../assets/images/curti.png";
import dislike from "../../assets/images/n-curti.png";
const MovieCard = ({
  movie,
  onClickLike,
  onClickDislike,
  onClickSkip,
  onClickSinopsis,
}) => {
  const background = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
  };

  const renderHearts = () => {
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
  return (
    <div className="movie-card">
      <div className="container">
        <div className="background" style={background} />
        <div className="backdrop" />
        <div />
        <h4 className="title">{movie.title}</h4>
        <div className="rating-container">
          <div className="hearts">{renderHearts()}</div>
          <div className="counter">({movie.vote_count} Avaliações)</div>
        </div>

        <div className="sinopsis-container">
          <span className="sinopsis">{movie.overview}</span>
          <a href="#" aria-label="Read Sinopsis" onClick={onClickSinopsis}>
            Ver Sinopse
          </a>
        </div>
      </div>

      <div className="buttons-container">
        <button
          className="dislike"
          type="button"
          aria-label="Like Movie"
          onClick={onClickDislike}
        >
          <img src={dislike} />
        </button>
        <button
          className="skip"
          type="button"
          aria-label="Like Movie"
          onClick={onClickSkip}
        >
          Pular
        </button>
        <button
          className="like"
          type="button"
          aria-label="Like Movie"
          onClick={onClickLike}
        >
          <img src={like} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
