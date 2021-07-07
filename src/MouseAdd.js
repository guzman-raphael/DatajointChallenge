import React from 'react';
class MouseAdd extends React.Component {
    constructor() {
        super();
        this.sendMouseAdd = this.sendMouseAdd.bind(this);
    };
    
    sendMouseAdd(event){
        
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        console.log(value);

        fetch('/setmouse', {
        method: 'POST',
        body:  data
        });
    };
    
    render() {
        return (
        <form onSubmit = {this.sendMouseAdd}>
          <input type='text' id='mouse_name' name='mouse_name' placeholder="Enter mouse name" required/>
          <input type='date' id='dob' name='dob' placeholder="Enter DOB" required/>
          <input type='text' id='sex' name='sex' placeholder="Enter Sex(M/N)" required/>
          <button type='submit'>Add mouse to table</button>
        </form>
        );
      }
}
export default MouseAdd;