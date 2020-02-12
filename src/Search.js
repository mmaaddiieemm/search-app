
// criteria and val are a key:val pair to search for
// data is the array of json objects.
// currently only set up for 2 levels of nested objects
function Search(key, val, inputData) {

  const results = [];
  if (key === null || val === null || inputData === null) return results;
  
  for (let i = 0; i < inputData.length; i++) {
    const entry = inputData[i];
    const keys = Object.keys(entry);
    
    for (let h = 0; h < keys.length; h++) {
      // this functionality allows every permutation of the
      // searched key to be included, allowing for the same data to be accessed across
      // databases (ie it might be "_id" in one db, but "observer_id" in another)
      if (keys[h].toString().includes(key)) {
        const currKey = keys[h];
        if (entry[currKey] === null) break;
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
      // here we'll search for the inverse. If we're searching for items where
      // the data is not present (specified by 'undefined'), then add that item
      // to the results. 
      else if (val === 'undefined') {
        if (!keys[h].toString().includes(key)) {
          results.push(entry); 
          break;
        }
      }
    }
  }
  return results;
}

export default Search;
