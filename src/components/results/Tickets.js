import React from 'react';
import Result from './Result';

function Tickets({ tickets }) {
  const ticketKeys = [['type', 'subject'],
    ['description'],
    ['url'],
    ['priority', 'status', 'submitter_id', 'assignee_id', 'organization_id'],
    ['tags', 'has_incidents', 'due_at', 'via']];
  return (
    <>
      <Result data={tickets} customKeys={ticketKeys} type="Tickets" />
    </>
  );
}


export default Tickets;
