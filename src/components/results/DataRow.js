import React from "react"; 
import VerifyData from "../../VerifyData.js"; 

// return a single formatted row of data given the expected keys
// for that row.  
function DataRow( {data, keys}) {
    return (
      <>
            {keys.map((item) => {
                
                return(< label key={item}><b> {item}: </b> {VerifyData(data, item)} </label>)
            })}
      </>
    ); 
  }
  
  export default DataRow; 