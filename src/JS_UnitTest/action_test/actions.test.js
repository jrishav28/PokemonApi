import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import getPoke from "../../src/actions";
import sinon from "sinon";

describe("dispach Action working", () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore();
  let mockAxios;

  beforeEach(() => {
    mockAxios = sinon.mock(axios);
  });
  afterEach(() => {
    mockAxios.restore();
  });
  it("Should dispatch Fetch_Region actions when calling getPoke()", () => {
    const data = [{ name: "charmeleon", abilities: ["blaze", "torrent"] }];
    const expected = [
      {
        type: "CHANGE_REGION",
        data: data,
      },
    ];
    const apiData = { status: 200, data: data };
    const resApi = Promise.resolve(apiData);
    mockAxios
      .expects("get")
      .withArgs("https://pokeapi.co/api/v2/pokemon/charmeleon")
      .returns(resApi);
    return store.dispatch(getPoke()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it("Should dispatch Fetch_Error actions when calling getPoke()", () => {
    const expected_data = "error";
    const expected = {
      type: "Fetch_Error",
      data: expected_data,
    };
    const apiData = { status: 500, data: expected_data };
    const resApi = Promise.reject(apiData);
    mockAxios
      .expects("get")
      .withArgs("https://pokeapi.co/api/v2/pokemon/charmeleon")
      .returns(resApi);
    return store.dispatch(getPoke()).then(() => {
      expect(store.getActions()[1]).toEqual(expected);
    });
  });
});
