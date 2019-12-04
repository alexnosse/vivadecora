import React, { useState, useEffect } from "react";
import { useRoutes, A, usePath } from "hookrouter";
import { connect } from "react-redux";

import logo from "../../../assets/images/logo-viva-decora.png";

import { getMovies } from "../../../actions/movies";
import { getGenres } from "../../../actions/genres";

import SideMenu from "../../side-menu/side-menu.component";
import MoviesPage from "../movies/movies.page";
import LikedMoviesPage from "../liked-movies/liked-movies.page";
import MovieDetailPage from "../movie-detail/movie-detail.page";
import MovieDetail from "../../movie-detail/movie-detail.component";

const mapStateToProps = state => {
  return {
    collection: state.collection,
  };
};

const mapDispatchToProps = {
  getMovies,
  getGenres,
};

const Home = props => {
  const { getMovies, getGenres } = props;

  const [currentMovie, setCurrentMovie] = useState(null);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const path = usePath();

  const toggleMenuVisibility = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(
    () => {
      getGenres();
      getMovies("https://api.themoviedb.org/4/list/126912");
    },
    [getMovies]
  );

  const openModal = movie => {
    setIsModalOpen(true);
    setCurrentMovie(movie);
  };

  const routes = {
    "/": () => <MoviesPage onClickOpenModal={openModal} />,
    "/liked": () => <LikedMoviesPage liked={true} />,
    "/disliked": () => <LikedMoviesPage liked={false} />,
    "/movies/:id": ({ id }) => <MovieDetailPage id={id} />,
  };
  const routeResult = useRoutes(routes);

  return (
    <>
      <MovieDetail
        movie={currentMovie}
        onClickClose={() => {
          setIsModalOpen(false);
          setCurrentMovie(null);
        }}
        show={isModalOpen}
      />
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
