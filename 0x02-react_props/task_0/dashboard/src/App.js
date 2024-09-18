import React from "react";
import "./App.css";
import Notifications from "./Notifications.js";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

const App = () => (
  <>
  <Header />
    <div className="App-body">
      <Login />
    </div>
    <Footer />
  </>
);

export default App;