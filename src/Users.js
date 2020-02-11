import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, Label} from "react-bootstrap"; 
import FormatCommonData from "./CommonData"; 
import DataRow from "./DataRow"; 
import "./Results.css"; 

function FormatUserData({ userData }) {
  // want to return in this format: 
  // name, alias, url, email, phone
  // tags, role, signature, organization_id
  // active, verified, suspended, shared, locale, timezone, last_login_at
  var keys = [['name', 'alias', 'email', 'url', 'phone'] ,
              ['tags', 'role', 'signature', 'organization_id'],
              ['active', 'verified', 'suspended', 'shared', 'locale', 'timezone', 'last_login_at']];
  return(
    <>
      <DataRow data={userData} keys={keys[0]} />
      <DataRow data={userData} keys={keys[1]} />
      <DataRow data={userData} keys={keys[2]} />
    </>
  ); 
}


function Users({ users }) {
  return (
    <div className="Results">
      <ListGroup>
        {users.map((i) => 
          <ListGroup.Item key={i.external_id}>
            <FormatUserData userData={i} />
            <FormatCommonData commonData={i} />
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

Users.propTypes = {
  userData: PropTypes.shape({
    _id: PropTypes.number,
    external_id: PropTypes.string,
    created_at: PropTypes.string,
    name: PropTypes.string,
    alias: PropTypes.string,
    active: PropTypes.bool,
    verified: PropTypes.bool,
    shared: PropTypes.bool,
    locale: PropTypes.string,
    timezone: PropTypes.string,
  }),
};

export default Users;
