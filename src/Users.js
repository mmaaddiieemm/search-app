import React from 'react';
import PropTypes from 'prop-types';
import Result from "./Result"; 

function Users({ users }) {
  var userKeys = [['name', 'alias', 'email', 'url', 'phone'] ,
                  ['tags', 'role', 'signature', 'organization_id'],
                  ['active', 'verified', 'suspended', 'shared', 'locale', 'timezone', 'last_login_at']];
  return (
    <>
      <Result data={users} customKeys={userKeys}/>
    </>
  );
}

Users.propTypes = {
  users: PropTypes.shape({
    _id: PropTypes.string,
    external_id: PropTypes.string,
    created_at: PropTypes.string,
    name: PropTypes.string,
    alias: PropTypes.string,
    active: PropTypes.string,
    verified: PropTypes.string,
    shared: PropTypes.string,
    locale: PropTypes.string,
    timezone: PropTypes.string,
  }),
};

export default Users;
