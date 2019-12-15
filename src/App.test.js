import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import SignupModal from "./SignupModal/SignupModal";

describe("App Should", () => {
  it("render", () => {
    //Arrange
    const wrapper = shallow(<App />);
    //Act

    //Assert
    wrapper.contains(<SignupModal />);
  });
});
