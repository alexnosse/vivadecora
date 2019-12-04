import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";

import { getGenres, GET_GENRES_REQUEST, GET_GENRES_SUCCESS } from "./genres";

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

describe("Genres actions", () => {
  it("should dispatch GET_GENRES_SUCCESS when getGenres is executed", () => {
    const store = mockStore({});
    const responseActions = [
      { type: GET_GENRES_REQUEST },
      { type: GET_GENRES_SUCCESS },
    ];
    return store.dispatch(getGenres()).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions[0].type).toEqual(responseActions[0].type);
      expect(expectedActions[1].type).toEqual(responseActions[1].type);
    });
  });
});
