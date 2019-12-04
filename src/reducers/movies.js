import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
} from "../actions/movies";

const initialState = {
  collection: {},
  isFetched: false,
  url: "https://api.themoviedb.org/4/list/126912",
  currentMovie: null,
  isMovieFetched: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        isFetched: true,
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        collection: {
          // TODO: collection with pagination ?
        },
        isFetched: false,
      };

    case GET_MOVIES_FAILURE:
      return {
        ...state,
        isFetched: false,
      };
    case GET_MOVIE_REQUEST:
      return {
        ...state,
        isFetched: true,
      };

    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        // TODO: update the current movie
        isFetched: false,
      };

    case GET_MOVIE_FAILURE:
      return {
        ...state,
        isFetched: false,
      };
    default:
      return state;
  }
}
