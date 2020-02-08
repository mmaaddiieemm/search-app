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
    
    // now this is REAL dumb but i'll fix it... 
    var tempResults = Search(key, value, UsersDb);
    for (var entry in tempResults) { 
        results.push(entry); 
    }
    tempResults = Search(key, value, OrgDb); 
    for (var entry1 in tempResults) {
        results.push(entry1); 
    }
    tempResults = Search(key, value, TicketsDb); 
    for (var entry2 in tempResults) {
        results.push(entry2); 
    }
    return results; 
}

export default SearchDatabase; 