import React from "react"; 


function Users({userData}) {
    console.log(userData); 
    return(
        <div>
            <p>{userData.name}</p>
        </div>
    ); 
}

export default Users; 