import React from "react";
import DataRow from "../components/results/DataRow.js"; 
import renderer from 'react-test-renderer';

test('When undefined or null data is passed in to verifyData', () => {
    const testData = {
        nameThing: 'a_unique_name'
    }; 
    var keys = Object.keys(testData);
    const component = renderer.create(
        <DataRow data={testData} keys={keys} />
    ); 
    let tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 

test('When data at param is valid, return the data in a string form', () => {
    const testData = {
        nameThing: 'a_unique_name', 
        arrayThing: [
            'name1', 
            'another thing'
        ]
    }; 
    var keys = Object.keys(testData);
    const component = renderer.create(
        
        <DataRow data={testData} keys={keys} />
    ); 
    let tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
})