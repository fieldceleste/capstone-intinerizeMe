import React , { Component } from 'react';
// import Header from './components/Header/Header';
// import './App.scss';
import BackgroundSlider from 'react-background-slider'

import headerbg from './components/Header/img/headerbg.jpg'
import rome from './components/Header/img/rome.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundSlider
  images={[headerbg,rome]}
  duration={10} 
  transition={2} />
      </div>
    );
  }
}

export default App;