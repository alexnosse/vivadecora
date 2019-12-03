import React, { useState } from "react";
import { useRoutes } from "hookrouter";

import logo from "../../../assets/images/logo-viva-decora.png";

import SideMenu from "../../side-menu/side-menu.component";
import MoviesPage from "../movies/movies.page";
import LikedMoviesPage from "../liked-movies/liked-movies.page";
import DislikedMoviesPage from "../disliked-movies/disliked-movies.page";
import MovieDetailPage from "../movie-detail/movie-detail.page";

const routes = {
  "/": () => <MoviesPage />,
  "/liked": () => <LikedMoviesPage />,
  "/disliked": () => <DislikedMoviesPage />,
  "/movies/:id": ({ id }) => <MovieDetailPage id={id} />,
};

function Home() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const routeResult = useRoutes(routes);

  const toggleMenuVisibility = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <div className="App">
        <div className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="content">
        <SideMenu onClick={toggleMenuVisibility} isOpen={isMenuOpened} />
        <div className={`page-content ${isMenuOpened ? "-show" : ""}`}>
          {routeResult}
        </div>
      </div>
    </>
  );
}

export default Home;
