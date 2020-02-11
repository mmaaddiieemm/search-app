import {DataRow, verifyData} from "../DataRow"; 

test('When undefined or null data is passed in to verifyData, return undefined', () => {
    const result = verifyData(null, 'toots'); 
    
}); 

test('when the parameter passed in is unefined, null or not in the data, render undefined', () => {

}); 

test('DataRow renders the number of items specified in the keys parameter', () => {

}); 

test('When data at param is valid, return the data in a string form', () => {
    const testData = {
        nameThing: 'a_unique_name'
    }; 
    const result = verifyData(testData, 'nameThing'); 
    expect(result).toBeStrictlyEqual('a_unique_name'); 
})