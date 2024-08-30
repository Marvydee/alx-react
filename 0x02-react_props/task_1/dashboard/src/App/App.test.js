import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "./Notifications";
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";

describe("App Component", () => {
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it("should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});
