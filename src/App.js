import React, {useState} from 'react';
import {InputGroup} from "react-bootstrap";
import DisplayResults from "./DisplayResults";
import './App.css';

function App() {
  // const [searchCriteria, setSearchCriteria] = useState(""); 

  const searchKey = "id"; 
  const value = 2; 
  return (
    <div className="App">
      <p>What do you want to search? </p>
      <p>available options: -</p>
      <InputGroup></InputGroup>
      <p>Results: </p>
      <DisplayResults searchKey={searchKey} value={value}></DisplayResults>
    </div>
  );
}

export default App;
