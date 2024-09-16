import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging HOC", () => {
  it("logs on mount and unmount when wrapping a basic component", () => {
    const TestComponent = () => <p>Test Component</p>;
    const WrappedComponent = WithLogging(TestComponent);

    const consoleSpy = jest.spyOn(console, "log");

    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component TestComponent is mounted"
    );

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component TestComponent is going to unmount"
    );

    consoleSpy.mockRestore();
  });

  it("logs on mount and unmount when wrapping a component with no name", () => {
    const WrappedComponent = WithLogging(() => <p>Anonymous Component</p>);

    const consoleSpy = jest.spyOn(console, "log");

    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith("Component Component is mounted");

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Component is going to unmount"
    );

    consoleSpy.mockRestore();
  });
});
