import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import React, { Component } from "react";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Add Header, Notifications, etc. */}

        {/* Wrap CourseList and Login components */}
        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>

        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>

        {/* Add News block */}
        <BodySection title="News from the School">
          <p>
            Welcome to the latest news section! Stay updated with the recent
            activities and events at our school.
          </p>
        </BodySection>

        {/* Add Footer, etc. */}
      </div>
    );
  }
}

export default App;
