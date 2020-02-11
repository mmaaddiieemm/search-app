import React from 'react';
import Search from './Search';
import Users from './Users.js';
import Tickets from './Tickets.js';
import Organizations from './Organizations.js';

const OrgDb = require('./data/organizations.json');
const TicketsDb = require('./data/tickets.json');
const UsersDb = require('./data/users.json');
 
function CollectResults({ searchKey, value }) {
  // search for all matching key:value pairs in the data and add them 
  // to the results. 
  var users = Search(searchKey, value, UsersDb);
  var tickets = Search(searchKey, value, TicketsDb);
  var orgs = Search(searchKey, value, OrgDb);

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
        {orgs.map((k) => <Organizations key={k.external_id} orgData={k} />)}
      </div>
    ); 
  }
}

export default CollectResults;
