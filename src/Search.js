
// criteria and val are a key:val pair to search for
// data is the array of json objects.
// currently only set up for 2 levels of nested objects
function Search(key, val, inputData) {

  const results = [];
  if (key === null || val === null || inputData === null) return results;
  
  for (let i = 0; i < inputData.length; i++) {
    const entry = inputData[i];
    const keys = Object.keys(entry);
    let validKeyFound = false; 
    
    for (let h = 0; h < keys.length; h++) {
      // this functionality allows every permutation of the
      // searched key to be included, allowing for the same data to be accessed across
      // databases (ie it might be "_id" in one db, but "observer_id" in another)
      const currKey = keys[h];
      if (entry[currKey] === null) break;
      if (currKey.toString().includes(key)) {
        validKeyFound = true; 
        // some properties are arrays, so check each of those. 
        // for both arrays and normal values, check the value for an exact match
        // and if so, add it to the results
        if (Array.isArray(entry[currKey])) {
          for (let j = 0; j < entry[currKey].length; j++) {
            const thisArray = entry[currKey];
            if (thisArray[j].toString() === val.toString()) {
              results.push(entry);
              break;
            }
          }
        } else if (entry[currKey].toString() === val.toString()) { 
          results.push(entry);
          break;
        }
      }
    }
    // we are searching for a key which does not exist, but we don't expect it to exist, 
    // so it matches. 
    if (val === 'undefined' && validKeyFound === false) {
      results.push(entry);
    }
  }
  return results;
}

export default Search;
