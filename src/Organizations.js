import React from 'react';
import {ListGroup} from 'react-bootstrap'; 
import FormatCommonData from "./CommonData"; 
import DataRow from "./DataRow"; 

function FormatOrgData({ orgData }) {
  // this array of keys represents the general structure 
  // for how to format the data output on the screen.  
  var keys = [['name', 'details', 'url'], 
              ['shared_tickets','tags', 'domain_names']]; 
  return(
    <>
      {keys.map((row) => {
        return (<DataRow key={row} data={orgData} keys={row} />)
      })}
    </>
  );
}
function Organizations({ orgData }) {
  if (typeof orgData === 'undefined' || orgData === null) return <></>; 
  return (
    <div className="Results">
      <ListGroup>
        {orgData.map((i) => 
          <ListGroup.Item key={i.external_id} >
            <FormatOrgData ticketData={i} />
            <FormatCommonData commonData={i} />
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}
export default Organizations;
