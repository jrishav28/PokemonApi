import pokeReducer from "../../src/reducers";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Poke Reducer", () => {
  const initialState = {
    data: null,
  };
  it("Should return default state", () => {
    const newState = pokeReducer(initialState, {});
    expect(newState.data).toEqual(null);
  });
  it("Should return Charmeleon data", () => {
    const expected_data = {
      name: "charmeleon",
      abilities: ["blaze", "torrent"],
    };
    const newState = pokeReducer(initialState, {
      type: "CHANGE_REGION",
      data: expected_data,
    });
    expect(newState.data).toEqual(expected_data);
  });
  it("Should give fetch error ", () => {
    const expected_data = {
      data: "error",
    };
    const newState = pokeReducer(initialState, {
      type: "Fetch_Error",
      data: expected_data,
    });
    expect(newState.data).toEqual(expected_data);
  });
});
