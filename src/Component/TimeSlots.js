import React, { Component } from 'react';
import Select from 'react-select';

let timeSlotnumber = 1;
let startTime = 7;
const options = [
    // {value: timeSlotNumber, label: (startTime + " - " + startTime+1)},
    {value: 8, label: '8:00 - 9:00'},
    {value: 9, label: '9:00 - 10:00'},
    {value: 10, label: '10:00 - 11:00'},
    {value: 11, label: '11:00 - 12:00'},
    {value: 12, label: '12:00 - 13:00'},
    {value: 13, label: '13:00 - 14:00'},
    {value: 14, label: '8:00 - 9:00'},
    {value: 15, label: '8:00 - 9:00'},
    {value: 16, label: '8:00 - 9:00'},
    {value: 17, label: '8:00 - 9:00'},
    {value: 18, label: '8:00 - 9:00'},
]

class TimeSlots extends Component {
        
    state = {
        timeSlot: '',
    }

        render(){
            const {selectedOption} = this.state; 

            return(
           <Select className = "roomDefaultBox" // selected box
                selected = {selectedOption}
                value = {selectedOption}
                onChange = {this.props.onChange}
                options = {options}
                placeholder = "Select time"
            />
            )
           }
         }
        
         export default TimeSlots;
 