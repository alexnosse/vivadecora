import React, { useState } from "react";
import { useRoutes, A, usePath } from "hookrouter";

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
  const path = usePath();
  const routeResult = useRoutes(routes);

  const toggleMenuVisibility = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  console.log("paht ", path);

  return (
    <>
      <SideMenu onClick={toggleMenuVisibility} isOpen={isMenuOpened} />
      <div className="page">
        <div className={`header ${isMenuOpened ? "-show" : ""}`}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="desktop-menu">
          <ul>
            <li>
              <A href="/" className={`${path === "/" ? " -active" : ""}`}>
                Filmes Não Curados
              </A>
            </li>

            <li>
              <A
                href="/liked"
                className={`${path === "/liked" ? " -active" : ""}`}
              >
                Filmes Curtidos
              </A>
            </li>
            <li>
              <A
                href="/disliked"
                className={`${path === "/disliked" ? " -active" : ""}`}
              >
                Filmes Não Curtidos
              </A>
            </li>
          </ul>
        </div>

        <div className={`page-content ${isMenuOpened ? "-show" : ""}`}>
          {routeResult}
        </div>
      </div>
    </>
  );
}

export default Home;
