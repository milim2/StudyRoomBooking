import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DatePick from './Component/DatePick';
import Room from './Component/Room';
import Time from './Component/TimeList';



class App extends Component {



  render() {
    return (
      <div className="App">
      <label>
        <h2>Study Room Booking </h2>
        <h3>Select Date</h3>
        <DatePick />
        <h3>Select Room </h3>
        <Room />      
        <h3>Select Time </h3>
        <Time />
        </label>

      </div>
  );
}
}

export default App;
