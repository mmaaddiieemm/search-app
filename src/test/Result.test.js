import React from "react"; 
import renderer from 'react-test-renderer';
import Result from '../components/results/Result.js';

test('When undefined or null data is passed in to verifyData', () => {
    const component = renderer.create(
        <Result data={null} customKeys={['1', '2', '3']} type={'uot'} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });