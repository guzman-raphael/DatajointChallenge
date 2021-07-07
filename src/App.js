import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { JsonToTable } from "react-json-to-table";


function App() {
  const [mouseTable, setMouseTable] = useState(0);

  useEffect(() => {
    fetch('/getmouse').then(res => res.json()).then(data => {
      setMouseTable(data);
    });
  }, []);

  const [sessionTable, setSessionTable] = useState(0);

  useEffect(() => {
    fetch('/getsessions').then(res => res.json()).then(data => {
      setSessionTable(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        Mouse Table
        <JsonToTable json={mouseTable} />

        Session Table
        <JsonToTable json={sessionTable} />
        Mouse Table Data Entry
        <div>
          <button>
            test
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;