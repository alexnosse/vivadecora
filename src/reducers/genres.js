import {
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
} from "../actions/movies";

const initialState = {
  isGenresFetched: false,
  url: "https://api.themoviedb.org/4/list/126912",
  genres: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES_REQUEST:
      return {
        ...state,
        isGenresFetched: true,
      };

    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: [...action.payload.genres],
        isGenresFetched: false,
      };

    case GET_GENRES_FAILURE:
      return {
        ...state,
        isGenresFetched: false,
      };

    default:
      return state;
  }
}
