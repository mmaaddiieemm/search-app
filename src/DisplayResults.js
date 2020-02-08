import React from 'react';
import Search from './Search';
import Users from './Users';
import Tickets from './Tickets';
import Organizations from './Organizations';

const OrgDb = require('./data/organizations.json');
const TicketsDb = require('./data/tickets.json');
const UsersDb = require('./data/users.json');

function DisplayResults({ searchKey, value }) {
  const users = Search(searchKey, value, UsersDb);
  const tickets = Search(searchKey, value, TicketsDb);
  const orgs = Search(searchKey, value, OrgDb);

  if (users.length === 0 && tickets.length === 0 && orgs.length === 0 ) {
    return <p>No entry found that matches criteria</p>; 
  } else {
    return (
      <div>
        {users.map((i) => <Users key={i.external_id} userData={i} />)}
        {tickets.map((j) => <Tickets key={j.external_id} ticketData={j} />)}
        {orgs.map((k) => <Organizations key={k.external_id} orgData={k} />)}
      </div>
    ); 
  }
}

export default DisplayResults;
