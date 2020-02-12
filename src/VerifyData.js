import React from 'react';

// given a dataset and a parameter, return the formatted data as a string
// if the data is valid, otherwise returns 'undefined'. If the data is an array,
// will add some extra characters to make it more readable.
function VerifyData(data, param) {
  // check to make sure the data is valid, if not return 'undefined'
  if (typeof data[param] === 'undefined' || data[param] === null || !data.hasOwnProperty(param) || data === null) {
    return <i>undefined</i>;
  }
  let result = data[param].toString();
  // do a little extra formatting for arrays.
  if (Array.isArray(data[param])) {
    result = `[${result}]`;
  }
  return result;
}

export default VerifyData;
