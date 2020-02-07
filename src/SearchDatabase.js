import Search from "./Search"; 
var OrgDb = require("./Data/organizations.json"); 
var TicketsDb = require("./Data/tickets.json"); 
var UsersDb = require("./Data/users.json"); 
// I initially assumed that we'd be searching a subset of these
// databases... but we are always searching all of them. 
// so we're running into the issue where certain values are tied together
// between DB's, like _ID in user should correspond to submitter_id
function SearchDatabase(key, value) {
    let results = []; 
    
    results.push(Search(key, value, UsersDb));
    results.push(Search(key, value, OrgDb)); 
    results.push(Search(key, value, TicketsDb)); 
    return results; 
}

export default SearchDatabase; 