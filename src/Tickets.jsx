import React from 'react';

function Tickets({ ticketData }) {
  return (
    <div>
      <p>{ticketData.description}</p>
    </div>
  );
}
export default Tickets;
