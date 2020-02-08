import React from 'react';
import PropTypes from 'prop-types';

function Users({ userData }) {
  return (
    <div>
      <p>{userData.name}</p>
    </div>
  );
}

Users.propTypes = {
  userData: PropTypes.shape({
    _id: PropTypes.number,
    external_id: PropTypes.string,
    name: PropTypes.string,
    alias: PropTypes.string,
    created_at: PropTypes.string,
    active: PropTypes.bool,
    verified: PropTypes.bool,
    shared: PropTypes.bool,
    locale: PropTypes.string,
    timezone: PropTypes.string,
  }),
};

export default Users;
