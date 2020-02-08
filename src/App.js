import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import DisplayResults from './DisplayResults';
import './App.css';

function App() {
  const [searchCriteria, setSearchCriteria] = useState('');

  let searchKey; let
    value = '';
  const parsedArr = searchCriteria.split('=');
  if (parsedArr.length > 1) {
    searchKey = parsedArr[0];
    value = parsedArr[1];
  }
  return (
    <div className="App-header">
      <p>What do you want to search? </p>
      <p>(Your query must be in the format 'search term'='value')</p>
      <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon1" onChange={(e) => setSearchCriteria(e.target.value)} />
      </InputGroup>
      <p>Results: </p>
      <DisplayResults searchKey={searchKey} value={value} />
    </div>
  );
}

export default App;
