import React from 'react';
import renderer from 'react-test-renderer';
import DataRow from '../components/results/DataRow.js';

test('When undefined or null data is passed in to verifyData', () => {
  const testData = {
    nameThing: 'a_unique_name',
  };
  const keys = Object.keys(testData);
  const component = renderer.create(
    <DataRow data={testData} keys={keys} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('When data at param is valid, return the data in a string form', () => {
  const testData = {
    nameThing: 'a_unique_name',
    arrayThing: [
      'name1',
      'another thing',
    ],
  };
  const keys = Object.keys(testData);
  const component = renderer.create(

    <DataRow data={testData} keys={keys} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
