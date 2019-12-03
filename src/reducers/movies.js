import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from "../actions/movies";

const initialState = {
  collection: {},
  isFetched: false,
  url: "https://api.themoviedb.org/4/list/126912",
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
    default:
      return state;
  }
}
