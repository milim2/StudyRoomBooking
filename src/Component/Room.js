import React from 'react';


class Room extends React.Component {

        constructor (props) {
            super(props); 
            
            this.state = {
                data: [{"name":"Gryffindor"},               {"name":"Hufflepuff"},              {"name":"Ravenclaw"},               {"name":"Slytherin"}],
            };
            }
        
        handleChange = (e) => {
            this.setState({
                name: e.target.value
            })
        }
    
    render() {
       return (
           <form>
           <select>
               {this.state.data.map(d => <option key={d.name}>{d.name}</option>)}
           </select>    
           <div>{this.state.name}</div>
           </form>
       );
      }
    }

export default Room;