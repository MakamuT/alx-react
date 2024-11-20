import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email"/>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password"/>
          <button type="button">OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>
          &copy; {getFullYear()} {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}
