import React from "react"
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CollectResults from "../CollectResults.js"; 

afterEach(cleanup);

test('When nonsense data is input, return an error message', () => {
    const component = renderer.create(
        <CollectResults searchKey='' value='' dataTypes='' />
    ); 
    let tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 

test('when a specific data type is requested, return only data from the specified datatype', () => {
    const component = renderer.create(
        <CollectResults searchKey="id" value='4' dataTypes='u' />
    ); 
    let tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
}); 

test('when no datatype is specified, return results from all data types', () => {

}); 

test('when valid input is entered and there is matching data, render the relevant data', () => {
    
});

test('when valid input is entered and there is no matching data, render a message indicating no relevant data found', () => {
    
}); 
