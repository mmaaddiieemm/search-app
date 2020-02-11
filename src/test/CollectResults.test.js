import React from "react"
import {cleanup, fireEvent, render} from '@testing-library/react';
import CollectResults from "../CollectResults"; 

afterEach(cleanup);

test('When nonsense data is input, render an error input', () => {
    const {queryByLabelText} = render(
        <CollectResults searchKey='' value='' dataTypes='' />
    ); 
    expect(queryByLabelText(/No entry found that matches criteria/)).toMatch('No entry found that matches criteria'); 

}); 