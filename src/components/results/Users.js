import React from 'react';
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

export default Users;
