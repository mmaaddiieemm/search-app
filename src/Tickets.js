import React from 'react';
import PropTypes from "prop-types"; 
import Result from "./Result"; 
import Organizations from './Organizations';

function Tickets({ tickets }) {
  var ticketKeys=[['type', 'subject'], 
            ['description'], 
            ['url'], 
            ['priority', 'status', 'submitter_id', 'assignee_id', 'organization_id'], 
            ['tags', 'has_incidents', 'due_at', 'via']]; 
  return (
    <>
      <Result data={tickets} customKeys={ticketKeys}/>
    </>
  );
}


export default Tickets;
