import React, { useState, useEffect } from 'react';
import { JsonToTable } from "react-json-to-table";
import MouseAdd from './MouseAdd';
import SessionAdd from './SessionAdd';
function App() {
  const [mouseTable, setMouseTable] = useState(0);
  const [sessionTable, setSessionTable] = useState(0);
  

  function getMouseTable() {
  fetch('/getmouse').then(res => res.json()).then(data => {
    setMouseTable(data);
  });
  }; 
  
  function getSessionTable() {
    fetch('/getsessions').then(res => res.json()).then(data1 => {
      setSessionTable(data1);
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Mouse Table</h1>
        <JsonToTable json={mouseTable} />
        <button onClick={getMouseTable}>Refresh/Load Table 🗘</button>
        <h1>Session Table</h1>
        <JsonToTable json={sessionTable} />
        <button onClick={getSessionTable}>Refresh/Load Table 🗘</button>
        <h3>Mouse Table Data Entry</h3>
        <MouseAdd/>
        <h3>Session Table Data Entry</h3>
        <SessionAdd/>
      </header>
    </div>
  );
}

export default App;