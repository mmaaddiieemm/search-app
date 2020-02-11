import React from 'react';
import FormatCommonData from "./CommonData"; 
import PropTypes from "prop-types"; 
import { ListGroup } from 'react-bootstrap';

function FormatTicketData({ticket}) {
  return(
    <>
      <p><b>type:</b> {ticket.type} <b>subject:</b> {ticket.subject} </p>
      <p><b>description: </b>{ticket.description} </p>
      <p><b>url:</b> {ticket.url}</p>
      <p>priority: {ticket.priority} status: {ticket.status} submitter_id: {ticket.submitter_id} assignee_id: {ticket.assignee_id} organization_id: {ticket.organization_id}</p>
      <p>tags: {ticket.tags} has_incidents: {ticket.has_incidents.toString()} due_at: {ticket.due_at} via: {ticket.via}</p>
    </>
  )
}

function Tickets({ tickets }) {
  return (
    <div className="Results">
      <ListGroup>
        {tickets.map((i) =>  
          <ListGroup.Item key={i.external_id} >
            <FormatTicketData ticket={i} />
            <FormatCommonData commonData={i} />
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default Tickets;
