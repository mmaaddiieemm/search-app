import React from 'react';
import renderer from 'react-test-renderer';
import VerifyData from '../VerifyData.js';

const testData = {
  testName: 'notMaddie',
  _id: '4',
  others: false,
  description: 'emtpy!',
};

test('When an entry is null, return undefined', () => {
  const component = renderer.create(
    <VerifyData data={testData} param={null} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('When an entry doesnt contain the given param, return undefined', () => {
  const component = renderer.create(
    <VerifyData data={testData} param="hasNeighbors" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
