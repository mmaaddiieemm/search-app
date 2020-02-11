import React from "react"; 

import PropTypes from "prop-types"; 

function FormatCommonData({commonData}) {
    return(
        <>
            <p>_id: {commonData._id} external_id: {commonData.external_id} created_at: {commonData.created_at}</p>
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