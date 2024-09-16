// src/App/App.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // Adding the event listener
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    // Removing the event listener
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            <Login />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func
};

App.defaultProps = {
  logOut: () => {}
};

export default App;