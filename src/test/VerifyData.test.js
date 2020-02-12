import React from "react";
import VerifyData from "../VerifyData.js"; 
import renderer from 'react-test-renderer';

let testData = {
    testName: 'notMaddie', 
    _id: '4',
    others: false,
    description: 'emtpy!'
};

test('When an entry is null, return undefined', () => {
    const component = renderer.create(
        <VerifyData data={testData} param={null} />
    ); 
    let tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 
test('When an entry doesnt contain the given param, return undefined', () => {
    const component = renderer.create(
        <VerifyData data={testData} param={'hasNeighbors'} />
    ); 
    let tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 