import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>
          &copy; {getFullYear()} {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}