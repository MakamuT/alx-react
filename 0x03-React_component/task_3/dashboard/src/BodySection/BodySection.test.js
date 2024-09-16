import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection component", () => {
  it("should render correctly the children and one h2 element", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check if there is exactly one h2 element
    expect(wrapper.find("h2")).toHaveLength(1);

    // Check if the h2 element contains the correct title text
    expect(wrapper.find("h2").text()).toBe("test title");

    // Check if the p element contains the correct children text
    expect(wrapper.find("p").text()).toBe("test children node");
  });
});
