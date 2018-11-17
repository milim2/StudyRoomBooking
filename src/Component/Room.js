import React from 'react';


class Room extends React.Component {

        constructor (props) {
            super(props); 
            
            this.state = {
                data: [{"name":"Gryffindor"},{"name":"Hufflepuff"},{"name":"Ravenclaw"},{"name":"Slytherin"}],
            };
            }
        
    
    render() {
       return (
           <select>
               {this.state.data.map(d => <option key={d.name}>{d.name}</option>)}
           </select>    
       );
      }
    }

export default Room;