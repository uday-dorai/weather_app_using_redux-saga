import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import WeatherComponent from './weatherComponent';



class App extends Component {

 

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WeatherComponent/>
        </div>

      </Provider>


    );
  }
}


export default App