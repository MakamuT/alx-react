import React from "react";
import "./App.css";
import holbertonLogo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
        <div>
          <label htmlFor="email"></label>
          <input type="email" />
        </div>
        <div>
        <label htmlFor="password"></label>
        <input type="password" />
        </div>
          <button type="submit">OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;