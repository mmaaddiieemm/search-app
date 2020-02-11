import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import CollectResults from './CollectResults';
import './App.css';

function App() {
  const [searchCriteria, setSearchCriteria] = useState('');

  let searchKey;
  let value;
  const parsedArr = searchCriteria.split('=');
  if (parsedArr.length > 1) {
    searchKey = parsedArr[0];
    value = (parsedArr[1] === null) ? '' : parsedArr[1];
  } else {
    value = '';
  }
  return (
    <div className="App-header">
      <p>What do you want to search? </p>
      <p className="App-instructions">Usage: [datatype] &lt;criteria&gt;=&lt;value&gt;</p>
      <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon1" onChange={(e) => setSearchCriteria(e.target.value)} />
      </InputGroup>
      <p className="App-results">Results: </p>
      <CollectResults searchKey={searchKey} value={value} />
    </div>
  );
}

export default App;
