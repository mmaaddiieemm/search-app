# A basic react application to search through user, ticket and organization data. 

## Quick Start

Run the following commands: `npm install`, then `npm start`. 

Navigate to localhost:3000 in your browser.  

## Usage Instructions:

- The type of data to search (users, tickets, organizations) can be specified by prepending -[u|t|o] to your query, u for 'users', t for 'tickets', o for 'organizations'. 
    - If unspecified, results from data types will be included. Any permutation of u, t or o can be used here, or none at all. 
    - Any input here other than u|o|t will be discarded. If no match is found, all databases will be searched. 
- User input must be in the format of &lt;key&gt;=&lt;value&gt;. For example, to search for an id of 5, enter "id=5".
- When searching for values which are 'empty', specify the &lt;value&gt; as `undefined`.

## Assumptions and Implementation Details

### Implementation Details:

- If a criteria is not found, print "No entry found that matches criteria".
- If any field for a given type of data does not exist, the value 'undefined' will be displayed. 
- Partial matches on values are not allowed, only complete matches.
- Partial matches on keys are allowed, i.e. a search for 'id=23' will return results for 'external_id', 'assignee_id' etc, as long as the value is an exact match. 
- Keys that specify array datatypes will return a match on an object if any of the array elements is an exact match for the value. 

### Assumptions:

- Each entry in the database for any given data type contains the following properties: id, external_id, created_at.
- No entries in the input data sets contain the value 'undefined'. 


## Other Information
* [create-react-app information and scripts](/doc/reactinfo.md)