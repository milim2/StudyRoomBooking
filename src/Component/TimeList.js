import React, { Component } from 'react';
import Time from './Time';
import { startOfHour } from 'date-fns';

class TimeList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      time => (<Time key={time.meridiem} info={startOfHour}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default TimeList;