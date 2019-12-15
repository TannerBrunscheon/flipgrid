import React from "react";
import { shallow } from "enzyme";
import SignupForm from "./SignupForm";

describe("Signup Form Should", () => {
  let setFirstName, setEmail, setPassword, onSubmit;

  beforeEach(() => {
    setFirstName = jest.fn();
    setEmail = jest.fn();
    setPassword = jest.fn();
    onSubmit = jest.fn();
  });
  it("call for changes in values", () => {
    //Arrange
    const wrapper = shallow(
      <SignupForm {...{ setFirstName, setEmail, setPassword }} />
    );
    const mockEvent = { target: { value: "foo" } };
    //Act
    wrapper.find("#NameInput").simulate("change", mockEvent);
    wrapper.find("#EmailInput").simulate("change", mockEvent);
    wrapper.find("#PasswordInput").simulate("change", mockEvent);
    //Assert
    expect(setFirstName).toHaveBeenCalledWith(mockEvent.target.value);
    expect(setEmail).toHaveBeenCalledWith(mockEvent.target.value);
    expect(setPassword).toHaveBeenCalledWith(mockEvent.target.value);
  });
  it("call for changes in values", () => {
    //Arrange
    const wrapper = shallow(
      <SignupForm {...{ setFirstName, setEmail, setPassword, onSubmit }} />
    );
    //Act
    wrapper.find("#SignupForm").simulate("submit", {
      preventDefault: () => {}
    });
    //Assert
    expect(onSubmit).toHaveBeenCalled();
  });
});
