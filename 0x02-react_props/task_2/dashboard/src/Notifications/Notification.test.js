// src/Notifications/Notifications.test.js
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders three NotificationItem components", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it("renders the correct html for the first NotificationItem", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().props().value).toEqual(
      "New course available"
    );
    expect(wrapper.find(NotificationItem).first().props().type).toEqual(
      "default"
    );
  });
});
