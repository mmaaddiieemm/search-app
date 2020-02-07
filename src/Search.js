
// criteria and val are a key:val pair to search for
// data is the array of json objects. 
function Search(key, val, inputData) {
    var results = []; 
    for (var i = 0; i < inputData.length; i++ ) {
        var entry = inputData[i]; 
        if (entry.hasOwnProperty(key)) {
            if (entry[key] === val) {
                results.push(entry); 
            }
        }
    }
    return results; 
}

export default Search; 