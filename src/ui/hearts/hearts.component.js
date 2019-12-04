import React from "react";
import "./hearts.component.scss";
import filled from "../../assets/images/favorite_filled.png";
import heart from "../../assets/images/favorite.png";
import black_heart from "../../assets/images/favorite_black.png";
const Hearts = ({ movie, isContrast = false }) => {
  const renderHearts = () => {
    if (movie) {
      const filledCount = Math.ceil(movie.vote_average / 2);
      let i = 0;
      let hearts = [];
      while (i < 5) {
        hearts.push(
          <img
            key={i}
            src={i < filledCount ? filled : isContrast ? black_heart : heart}
            alt={`Média de Votos: ${filledCount} de 5`}
          />
        );
        i++;
      }

      return hearts;
    }
  };
  return <div className="hearts">{renderHearts()}</div>;
};

export default Hearts;
