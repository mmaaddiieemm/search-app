import React from "react"
import {cleanup, fireEvent, render} from '@testing-library/react';
import CollectResults from "../CollectResults"; 

afterEach(cleanup);

test('When nonsense data is input, render an error input', () => {
    const {queryAllByText} = render(
        <CollectResults searchKey='' value='' dataTypes='' />
    ); 
    expect(queryAllByText('')[0]).toMatch(<body><div><p class="App-results">No entry found that matches criteria</p></div></body>); 

}); 

test('when a specific data type is requested, return only data from the specified datatypes', () => {

}); 

test('when no datatype is specified, return results from all data types', () => {

}); 

test('when valid input is entered and there is matching data, render the relevant data', () => {
    
});

test('when valid input is entered and there is no matching data, render a message indicating no relevant data found', () => {
    
}); 
