import React, { useState, useEffect } from "react";
import { useRoutes, A, usePath } from "hookrouter";
import { connect } from "react-redux";

import logo from "../../../assets/images/logo-viva-decora.png";

import { getMovies } from "../../../actions/movies";

import SideMenu from "../../side-menu/side-menu.component";
import MoviesPage from "../movies/movies.page";
import LikedMoviesPage from "../liked-movies/liked-movies.page";
import DislikedMoviesPage from "../disliked-movies/disliked-movies.page";
import MovieDetailPage from "../movie-detail/movie-detail.page";

const routes = {
  "/": () => <MoviesPage />,
  "/liked": () => <LikedMoviesPage liked={true} />,
  "/disliked": () => <LikedMoviesPage liked={false} />,
  "/movies/:id": ({ id }) => <MovieDetailPage id={id} />,
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  getMovies,
};

const Home = props => {
  const { getMovies } = props;

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const path = usePath();
  const routeResult = useRoutes(routes);

  const toggleMenuVisibility = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(
    () => {
      getMovies("https://api.themoviedb.org/4/list/126912");
    },
    [getMovies]
  );

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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
