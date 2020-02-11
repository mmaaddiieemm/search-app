import React from "react"; 

// return a single formatted row of data given the expected keys
// for that row.  
function DataRow( {data, keys}) {
    return (
      <>
        <p>
            {keys.map((item) => {
                return(<><b> {item}: </b> {verifyData(data, item)} </>)
            })}
        </p>
      </>
    ); 
  }
  
  // given a dataset and a parameter, return the formatted data as a string
  // if the data is valid, otherwise returns 'undefined'. If the data is an array, 
  // will add some extra characters to make it more readable. 
  function verifyData( data, param) {
    // check to make sure the data is valid, if not return 'undefined' 
    if ( typeof data[param] === 'undefined' || data[param] === null || !data.hasOwnProperty(param) || data === null) {
      return <i>undefined</i>;
    } else {
      let result = data[param].toString(); 
      // do a little extra formatting for arrays. 
      if (Array.isArray(data[param])) {
        result = '[' + result + ']'; 
      }
      return result;  
    }
  }; 

  export default DataRow; 