import React, { Component } from 'react';
// import Room from './Component/Room';
// import Calendar from "./Component/Calendar";
import "./App.css";
import Scheduler from './Component/Scheduler';

class App extends Component {

  render() {
    return (
      <div className="App">
      {/* <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header> */}
        <main>
        <label>
        <h2>Study Room Booking </h2>
        <h3>Select Room </h3>
        {/* <Room />        
        <Calendar /> */}
        <Scheduler />>
        </label>
        </main>
      </div>
  );
}
}

export default App;
