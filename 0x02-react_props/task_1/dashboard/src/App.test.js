import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

describe("App Component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
