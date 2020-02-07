import Orgs from "./Data/organizations.json"; 
import Tickets from "./Data/tickets.json"; 
import Users from "./Data/users.json"; 

function Search(criteria, data) {
    if (data.hasOwnProperty(criteria)) {

    } else {
        return ("Could not find entry"); 
    }
}

export default Search; 