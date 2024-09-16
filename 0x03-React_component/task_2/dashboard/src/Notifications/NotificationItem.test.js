// src/Notifications/Notifications.test.js
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("calls markAsRead with the right ID when a NotificationItem is clicked", () => {
    const wrapper = shallow(
      <Notifications
        listNotifications={[{ id: 1, type: "default", value: "Test" }]}
      />
    );
    const instance = wrapper.instance();
    jest.spyOn(instance, "markAsRead");

    wrapper.find("NotificationItem").simulate("click");

    expect(instance.markAsRead).toHaveBeenCalledWith(1);
  });
});
