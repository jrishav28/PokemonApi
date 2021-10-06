import Dropdown from "../../src/components/Dropdown";
import Enzyme, { shallow, mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("Dropdown Component ", () => {
  const change = () => {};
  let wrapper;
  let props = {
    data: ["charmeleon", "charizard"],
    value: "",
    change,
  };

  it("should hae 1 select element", () => {
    wrapper = shallow(<Dropdown {...props} />);

    const element = wrapper.find("select");
    expect(element.length).toEqual(1);
  });
  it("should show options", () => {
    wrapper = shallow(<Dropdown {...props} />);
    const element = wrapper.find("option");
    expect(element.length).toEqual(2);
  });
  it("simulates change events", () => {
    const wrapper = shallow(<Dropdown {...props} />);
    wrapper
      .find("select")
      .simulate("change", { target: { value: "charmeleon" } });
    expect(wrapper.find("change")).toBeCalled;
  });
  it("simulates change events", () => {
    const expected = ["charmeleon", "charizard"];
    const wrapper = shallow(<Dropdown {...props} />);
    expect(wrapper.instance().props.data).toEqual(expected);
  });
});
