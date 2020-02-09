
// criteria and val are a key:val pair to search for
// data is the array of json objects.
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
  }
  return results;
}

export default Search;
