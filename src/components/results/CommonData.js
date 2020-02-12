import React from "react"; 
import DataRow from "./DataRow"; 

function FormatCommonData({commonData}) {
    var keys = ['_id', 'external_id', 'created_at']; 
    return(
        <>
            <DataRow data={commonData} keys={keys} />
        </>
    ); 
}

export default FormatCommonData; 