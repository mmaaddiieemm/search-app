import React from "react"; 
import PropTypes from "prop-types"; 
import DataRow from "./DataRow"; 

function FormatCommonData({commonData}) {
    var keys = ['_id', 'external_id', 'created_at']; 
    return(
        <>
            <DataRow data={commonData} keys={keys} />
        </>
    ); 
}

// FormatCommonData.propTypes = {
//     commonData: PropTypes.shape({
//       _id: PropTypes.number,
//       external_id: PropTypes.string,
//       created_at: PropTypes.string,
//     })
// }; 

export default FormatCommonData; 