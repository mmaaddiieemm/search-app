import React from "react"; 
import Search from "./Search.js"; 
import Users from "./Users.js"; 
import Tickets from "./Tickets.js"; 
import Organizations from "./Organizations.js"; 
var OrgDb = require("./data/organizations.json"); 
var TicketsDb = require("./data/tickets.json"); 
var UsersDb = require("./data/users.json"); 

function DisplayResults({searchKey, value}) {
    var users = Search(searchKey, value, UsersDb); 
    var tickets = Search(searchKey, value, TicketsDb); 
    var orgs = Search(searchKey, value, OrgDb); 

    return(
        <div>
            {users.map( (i) => <Users key={i.external_id} userData={i} /> )}
            {tickets.map( (j) => <Tickets key={j.external_id} ticketData={j} /> )}
            {orgs.map( (k) => <Organizations key={k.external_id} orgData={k} /> )}
        </div>
    ); 
}

export default DisplayResults; 