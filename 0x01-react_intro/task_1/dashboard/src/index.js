import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div id='root-app'>
      <App/>
    </div>
    <div id='root-notifications'>
      <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
