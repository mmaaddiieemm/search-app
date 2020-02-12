import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import CollectResults from './CollectResults';
import './App.css';

function App() {
  const [searchCriteria, setSearchCriteria] = useState('');

  let searchKey = searchCriteria;
  let dataTypes = 'uto'; 
  let value;
  if (searchKey.split(" ").length > 1) {
    dataTypes = searchKey.split(" ")[0].split('-')[1]; 
    console.log(dataTypes); 
    searchKey = searchKey.split(" ")[1]; 
  }
  let parsedArr = searchKey.split('=');
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
      <CollectResults searchKey={searchKey} value={value} dataTypes={dataTypes} />
    </div>
  );
}

export default App;
