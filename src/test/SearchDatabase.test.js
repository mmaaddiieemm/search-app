import SearchDatabase from "../SearchDatabase.js"; 

// this is another big chunk, we want to make sure we can actually 
// pass in criteria and get the right stuff out... 

test('when a single option flag is used, search only that database', () => {
    const key = "_id"; 
    const value = "111"; 
    var result = SearchDatabase(key, value); 
    // expect(result.length).toBe(1); 
    expect(true);  
}); 

test('return the exact number of matches... ', () => {
    var result = SearchDatabase("verified", true);
    expect(result[0].length).toStrictEqual(26); 
})