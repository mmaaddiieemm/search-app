import React from 'react';

function Users({ userData }) {
  return (
    <div>
      <p>{userData.name}</p>
    </div>
  );
}

export default Users;
