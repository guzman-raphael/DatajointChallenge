import React from 'react';
class SessionAdd extends React.Component {
    constructor() {
        super();
        this.sendSessionAdd = this.sendSessionAdd.bind(this);
    };
    
    sendSessionAdd(event){
        
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        console.log(value);

        fetch('/setsession', {
        method: 'POST',
        body:  data
        });
    };
    
    render() {
        return (
        <form onSubmit = {this.sendSessionAdd}>
          <input type='text' id='mouse_name' name='mouse_name' placeholder="Enter mouse name" required/>
          <input type='date' id='session_date' name='session_date' placeholder="Enter Session Date" required/>
          <input type='number' id='experiment_setup' name='experiment_setup' placeholder="Enter experimenter ID" required/>
          <button type='submit'>Add Session to table</button>
        </form>
        );
      }
}
export default SessionAdd;