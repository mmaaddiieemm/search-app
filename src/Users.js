import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from "react-bootstrap"; 
import FormatCommonData from "./Result"; 
import "./Results.css"; 

function FormatUserData({ userData }) {
  // want to return in this format: 
  // name, alias, url, email, phone
  // tags, role, signature, organization_id
  // active, verified, suspended, shared, locale, timezone, last_login_at
  
  // problem items: 
  // verified (id=55), locale, timezone, email,
  
  console.log(userData); 
  return(
    <>
      <p><b>name: </b> {userData.name} <b> alias: </b> {userData.alias} 
        <b> email: </b> {verifyData(userData, 'email')} <b> phone: </b> {verifyData(userData, 'phone')}
        <b> url: </b> {userData.url}</p>
      <p>tags: {verifyData(userData, 'tags')} </p>
      <p> active: {verifyData(userData, 'active')} verified: {verifyData(userData, 'verified')} shared: {userData.shared} locale: {verifyData(userData, 'locale')} timezone: {verifyData(userData, 'timezone')}</p>
    </>
  ); 
}

function verifyData( data, param) {
  // check to make sure the data is valid
  if (param === 'tags') {
    console.log(data);
  } 
  if (data.hasOwnProperty(param) && (typeof data.param !== 'undefined') && (data.param !== null)) {
    // for arrays, make them a little easier to read by adding 
    // spacing and buffer
    // todo: currently broken, determine how to fix array print
    if (Array.isArray(data.param)) {
      var buffer = '['; 
      for (var item in data.param) {
        buffer.concat(item.toString() + ' ' ); 
      }
      console.log(buffer); 
      return buffer.concat(']'); 
    } else {
      return data.param.toString(); 
    }
  } else {
    // print that it's invalid
    return <i>undefined</i>;
  } 
}; 

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
