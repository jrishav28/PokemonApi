import store from "../../src/store";
import { makeMockStore } from "../test_util/test_util";
it("should set the supplied initial state", () => {
  const initialState = {
    TestState: "Test",
  };
  const store = makeMockStore();
  expect(store.getState()).toEqual({});
});
