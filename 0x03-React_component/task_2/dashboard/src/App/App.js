import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import React, { Component } from 'react';


describe("<App />", () => {
  it("should call logOut and display alert when Ctrl + h is pressed", () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    const wrapper = shallow(<App logOut={logOutMock} />);

    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore(); // Restore the alert function
  });
});