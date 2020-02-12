import React from 'react';
import Search from './Search';
import Users from './Users.js';
import Tickets from './Tickets.js';
import Organizations from './Organizations.js';

const UsersDb = require('./data/users.json');
const TicketsDb = require('./data/tickets.json');
const OrgDb = require('./data/organizations.json');
 
function CollectResults({ searchKey, value, dataTypes }) {
  // search for all matching key:value pairs in the data and add them 
  // to the results. 
  console.log(dataTypes); 
  
  var users = (dataTypes.includes('u')) ? Search(searchKey, value, UsersDb) : [];
  var tickets = (dataTypes.includes('t')) ? Search(searchKey, value, TicketsDb) : [];
  var orgs = (dataTypes.includes('o')) ? Search(searchKey, value, OrgDb) : [];
  
  return (
    <div>
      <InvalidDataTypes dataTypes={dataTypes}/>
      <InvalidInputData databases={[users, tickets, orgs]} />
      <Users users={users} />
      <Tickets tickets={tickets}/>
      <Organizations orgs={orgs}/>
    </div>
  ); 
}

// Handles if there was no matching key:value pair found in the database. 
function InvalidInputData({databases}) {
  var validInput = false; 
  for (let db in databases) {
    if (!db.length === 0) {
      validInput = true; 
    }
  } 
  if (!validInput) {
    return <p className="App-results">No entry found that matches criteria</p>; 
  } else return <></>; 
}

// Handles if there is an invalid data type passed in. 
// This still allows the user to search, it just discards the bad input. 
function InvalidDataTypes({dataTypes}) {
  let invalidDataTypes = dataTypes.replace('u', '').replace('t', '').replace('o', '').trim(); 
  let realDataTypes = dataTypes.replace(invalidDataTypes, ''); 
  if (!(invalidDataTypes === '')) {
    console.log('bad shit'); 
    return <p className="App-results">Error: no such datatype with value(s): {invalidDataTypes}, instead searching for {realDataTypes}</p>; 
  } else return <></>; 
}

export default CollectResults;
