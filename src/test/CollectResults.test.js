import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import CollectResults from '../CollectResults.js';

afterEach(cleanup);

test('When nonsense data is input, return an error message', () => {
  const component = renderer.create(
    <CollectResults searchKey="" value="" dataTypes="" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('when a specific data type is requested, return only data from the specified datatype', () => {
  const component = renderer.create(
    <CollectResults searchKey="id" value="4" dataTypes="u" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
