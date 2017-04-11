var locations = [{

    "name": "Place1 ",
    "full_location": "1008 super way",
    "lat": "45.67956915",
    "lng": "-111.0323321",
    "phone": "1-999-944-2139",
    "website": ""
    
    },
    {
    "name": "Place2",
    "full_location": "16 super way",
    "lat": "45.67956915",
    "lng": "-111.0323321",
    "phone": "(999) 586-3281",
    "website": "http://google.com"
    
    },
    {
    "name": "Place3",
    "full_location": "210 super way",
    "lat": "46.892053",
    "lng": "-114.0191616",
    "phone": "(999) 543-0171",
    "website": ""
    
  }];
  
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Location from './Location';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Map Search</h2>
        </div>
        <p className="App-intro">
          <Location locations={locations}/>
        </p>
      </div>
    );
  }
}

export default App;
