import React from 'react';
import PropTypes from "prop-types"; 
import { ListGroup } from 'react-bootstrap';
import FormatCommonData from "./CommonData"; 
import DataRow from "./DataRow"; 

function FormatTicketData({ticketData}) {
  // this array of keys represents the general structure 
  // for how to format the data output on the screen.  
  var keys=[['type', 'subject'], 
            ['description'], 
            ['url'], 
            ['priority', 'status', 'submitter_id', 'assignee_id', 'organization_id'], 
            ['tags', 'has_incidents', 'due_at', 'via']]; 
  return(
    <>
      {keys.map((row) => {
        return (<DataRow key={row} data={ticketData} keys={row} />)
      })}
    </>
  );
}

function Tickets({ tickets }) {
  if (typeof tickets === 'undefined' || tickets === null) return <></>; 
  return (
    <div className="Results">
      <ListGroup>
        {tickets.map((i) =>  
          <ListGroup.Item key={i.external_id} >
            <FormatTicketData ticketData={i} />
            <FormatCommonData commonData={i} />
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default Tickets;
