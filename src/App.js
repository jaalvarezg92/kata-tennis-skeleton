import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href='/'>Kata Tennis</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <div className='App__content'>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
