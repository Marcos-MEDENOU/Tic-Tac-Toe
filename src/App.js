import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
 import Game from './components/Game';

class App extends React.Component {
  render() {
    return (  
      <div>
        <Game/>
      </div>
      
    )
  }
}



export default App;
