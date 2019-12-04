import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";

import { getMovies, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from "./movies";

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe("Movies actions", () => {
  it("should dispatch GET_MOVIES_SUCCESS when getMovies is executed", () => {
    const store = mockStore({});
    const responseActions = [
      { type: GET_MOVIES_REQUEST },
      { type: GET_MOVIES_SUCCESS },
    ];
    const url = `https://api.themoviedb.org/4/list/126912`;
    return store.dispatch(getMovies(url)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(responseActions[0].type);
      expect(expectedActions[1].type).toEqual(responseActions[1].type);
    });
  });

  it("should have like === true if the user likes the video", () => {});
  it("should have dislike === true if the user dislikes the video", () => {});
});
