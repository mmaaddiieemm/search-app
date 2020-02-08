import Search from './Search';

const OrgDb = require('./Data/organizations.json');
const TicketsDb = require('./Data/tickets.json');
const UsersDb = require('./Data/users.json');
// I initially assumed that we'd be searching a subset of these
// databases... but we are always searching all of them.
// so we're running into the issue where certain values are tied together
// between DB's, like _ID in user should correspond to submitter_id
function SearchDatabase(key, value) {
  const results = [];

  // now this is REAL dumb but i'll fix it...
  let tempResults = Search(key, value, UsersDb);
  for (const entry in tempResults) {
    results.push(entry);
  }
  tempResults = Search(key, value, OrgDb);
  for (const entry1 in tempResults) {
    results.push(entry1);
  }
  tempResults = Search(key, value, TicketsDb);
  for (const entry2 in tempResults) {
    results.push(entry2);
  }
  return results;
}

export default SearchDatabase;
