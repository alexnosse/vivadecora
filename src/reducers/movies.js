import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
} from "../actions/movies";
import moment from "moment";

const initialState = {
  collection: [],
  isFetched: false,
  url: "https://api.themoviedb.org/4/list/126912",
  currentMovie: null,
  isMovieFetched: false,
};
const momentDateFormat = "YYYY-MM-DD hh:mm:ss";
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
        collection: [
          ...state.collection,
          ...action.payload.results.map(item => {
            return {
              liked: false,
              disliked: false,
              dateUpdated: null,
              ...item,
            };
          }),
        ],
        isFetched: false,
      };

    case GET_MOVIES_FAILURE:
      return {
        ...state,
        isFetched: false,
      };

    case LIKE_MOVIE:
      return {
        ...state,
        collection: state.collection.map((movie, index) => {
          if (index === action.index) {
            movie.liked = true;
            movie.disliked = false;
            movie.dateUpdated = moment().format(momentDateFormat);
          }
          return movie;
        }),
      };

    case DISLIKE_MOVIE:
      return {
        ...state,
        collection: state.collection.map((movie, index) => {
          if (index === action.index) {
            movie.disliked = true;
            movie.liked = true;
            movie.dateUpdated = moment().format(momentDateFormat);
          }
          return movie;
        }),
      };
    default:
      return state;
  }
}
