import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom component", () => {
  it("should render correctly a BodySection component and pass the props correctly", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check if it renders the BodySection component
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Check if the title prop is passed correctly to BodySection
    expect(wrapper.find(BodySection).prop("title")).toBe("test title");

    // Check if the children are passed correctly
    expect(wrapper.find(BodySection).children().find("p").text()).toBe(
      "test children node"
    );
  });
});
