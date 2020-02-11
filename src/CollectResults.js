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

  // this block attempts to identify the related items and adds them to the list. 
  // this definitely needs to be updated to utilize some sort of set so that 
  // we don't get duplication of entries. 
  // if ( typeof searchKey !== 'undefined' && typeof value !== 'undefined' && !searchKey.includes('id')) {
  //   // loop through secondary results and add them to the list? 
  //   let firstResults = users.concat(tickets).concat(orgs); 
  //   for (var result in firstResults) {
  //     users = users.concat(Search('id', firstResults[result]._id, UsersDb)); 
  //     tickets = tickets.concat(Search('id', firstResults[result]._id, TicketsDb)); 
  //     orgs = orgs.concat(Search('id', firstResults[result]._id, OrgDb)); 
  //   }    
  // }
  
  if (users.length === 0 && tickets.length === 0 && orgs.length === 0 ) {
    return <p className="App-results">No entry found that matches criteria</p>; 
  } else {
    return (
      <div>
        <Users users={users} />
        <Tickets tickets={tickets} />
        <Organizations orgs={orgs} />
      </div>
    ); 
  }
}

export default CollectResults;
