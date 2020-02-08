
// criteria and val are a key:val pair to search for
// data is the array of json objects. 
function Search(key, val, inputData) {
    var results = []; 
    console.log(inputData.length); 
    for (var i = 0; i < inputData.length; i++ ) {
        var entry = inputData[i]; 
        var keys = Object.keys(entry); 
        for (var h = 0; h < keys.length; h++ ) {
            // this functionality allows every permutation of the 
            // searched key to be included, allowing for the same data to be accessed across
            // databases (ie it might be "_id" in one db, but "observer_id" in another)
            if (keys[h].includes(key)) {
                if (Array.isArray(entry[key])) {
                    for (var j = 0; j < entry[key].length; j++) {
                        var thisArray = entry[key]; 
                        if (thisArray[j] == val) {
                            results.push(entry); 
                        }
                    }
                } else {
                    if (entry[key] == val) {
                        results.push(entry); 
                    }
                }
            }
        }
    }
    return results; 
}

export default Search; 