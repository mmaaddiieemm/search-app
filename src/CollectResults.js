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

  var users = (dataTypes.includes('u')) ? Search(searchKey, value, UsersDb) : [];
  var tickets = (dataTypes.includes('t')) ? Search(searchKey, value, TicketsDb) : [];
  var orgs = (dataTypes.includes('o')) ? Search(searchKey, value, OrgDb) : [];
  
  if (users.length === 0 && tickets.length === 0 && orgs.length === 0 ) {
    return <p className="App-results">No entry found that matches criteria</p>; 
  } else {
    // while each of the logic in the three components for the datatypes is extremely 
    // similar and could easily be condensed into one component, I wanted to keep them 
    // separate so that each component strictly defines what should be displayed, and so 
    // we can use PropTypes to enforce what should be passed in.
    return (
      <div>
        <Users users={users} />
        <Tickets tickets={tickets}/>
        <Organizations orgs={orgs}/>
      </div>
    ); 
  }
}

export default CollectResults;
