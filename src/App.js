import React, {useState} from 'react';
import { Form, InputGroup, Button} from "react-bootstrap";
import Results from "./Results";
import './App.css';
import Search from "./Search"; 

function App() {
  const [searchCriteria, setSearchCriteria] = useState(""); 
  
  const criteria = "-u"; 

  return (
    <div className="App">
      <p>What do you want to search? </p>
      <p>available options: -</p>
      <InputGroup></InputGroup>
      <p>Results: </p>
      <Results criteria={searchCriteria}></Results>
    </div>
  );
}

export default App;
