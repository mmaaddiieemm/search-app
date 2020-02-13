import React from 'react';
import Search from './Search';
import Users from './components/results/Users.js';
import Tickets from './components/results/Tickets.js';
import Organizations from './components/results/Organizations.js';

const UsersDb = require('./data/users.json');
const TicketsDb = require('./data/tickets.json');
const OrgDb = require('./data/organizations.json');

function CollectResults({ searchKey, value, dataTypes }) {
  dataTypes = dataTypes.toLowerCase(); 
  // search for all matching key:value pairs in the data and add them
  // to the results.

  const users = (dataTypes.includes('u')) ? Search(searchKey, value, UsersDb) : [];
  const tickets = (dataTypes.includes('t')) ? Search(searchKey, value, TicketsDb) : [];
  const orgs = (dataTypes.includes('o')) ? Search(searchKey, value, OrgDb) : [];

  return (
    <div>
      <InvalidDataTypes dataTypes={dataTypes} />
      <InvalidInputData databases={[users, tickets, orgs]} />
      <Users users={users} />
      <Tickets tickets={tickets} />
      <Organizations orgs={orgs} />
    </div>
  );
}

// Handles if there was no matching key:value pair found in the database.
function InvalidInputData({ databases }) {
  let validInput = false;
  for (const db in databases) {
    if (databases[db].length !== 0) {
      validInput = true;
    }
  }
  if (!validInput) {
    return <p className="App-results">No entry found that matches criteria</p>;
  } return <></>;
}

// Handles if there is an invalid data type passed in.
// This still allows the user to search, it just discards the bad input.
function InvalidDataTypes({ dataTypes }) {
  const invalidDataTypes = dataTypes.replace('u', '').replace('t', '').replace('o', '').trim();
  let realDataTypes = dataTypes.replace(invalidDataTypes, '');
  if (realDataTypes === '') realDataTypes = 'uot'; // if nothing specified, default to all databases.
  if (!(invalidDataTypes === '')) {
    return (
      <p className="App-results">
        Error: no such datatype with value(s):
        {invalidDataTypes}
        , instead searching for
        {realDataTypes}
      </p>
    );
  } return <></>;
}

export default CollectResults;
