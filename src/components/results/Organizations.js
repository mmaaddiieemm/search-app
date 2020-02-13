import React from 'react';
import Result from './Result';

function Organizations({ orgs }) {
  const orgKeys = [['name', 'details', 'url'],
    ['shared_tickets', 'tags', 'domain_names']];
  return (
    <>
      <Result data={orgs} customKeys={orgKeys} type="Organizations" />
    </>
  );
}

export default Organizations;
