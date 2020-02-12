import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import CollectResults from './CollectResults';
import './App.css';


function App() {
  const [searchCriteria, setSearchCriteria] = useState('');

  let searchKey = searchCriteria;
  let dataTypes = 'uto'; // search all types by default
  let value;

  // find the first space where it's not a part of the
  // value that we're searching for. The string preceding that will
  // contain any specified database types, if applicable.
  if (searchKey.split(' ').length > 1 && (searchKey.indexOf(' ') < searchKey.indexOf('='))) {
    // the datatypes will be everything before the first =, but not including the
    // search key.
    const begginingOfKey = searchKey.split('=')[0].lastIndexOf(' ');
    dataTypes = searchKey.slice(0, begginingOfKey);
    dataTypes = dataTypes.replace(' ', '');
    searchKey = searchKey.slice(begginingOfKey, searchKey.length).trim();
  }
  // parse out the key:value pair.
  const parsedArr = searchKey.split('=');
  if (parsedArr.length > 1) {
    searchKey = parsedArr[0];
    value = (parsedArr[1] === null) ? '' : parsedArr[1];
  } else {
    value = '';
  }

  return (
    <div className="App-header">
      <p>What do you want to search? </p>
      <p className="App-instructions">
        Usage: [datatypes] &lt;criteria&gt;=&lt;value&gt;
        <br />
        Results from all specified data types that contain a key:value pair where the value is an exact match will be returned.
        {' '}
        <br />
        To search for empty values, use the value 'undefined'
        <br />
        All inputs are currently case sensitive.
        <br />
      </p>
      <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon1" onChange={(e) => setSearchCriteria(e.target.value)} />
      </InputGroup>
      <p className="App-results">Results: </p>
      <CollectResults searchKey={searchKey} value={value} dataTypes={dataTypes} />
    </div>
  );
}

export default App;
