import React from 'react';
import { ListGroup } from 'react-bootstrap';
import FormatCommonData from './CommonData';
import './Result.css';
import DataRow from './DataRow';

//
function FormatCustomData({ data, customKeys }) {
  // this array of keys represents the general structure
  // for how to format the data output on the screen.
  return (
    <>
      {customKeys.map((row) => (<DataRow key={row} data={data} keys={row} />))}
    </>
  );
}


function Result({ data, customKeys, type }) {
  if (typeof data === 'undefined' || data === null) return <></>;
  return (
    <div className="Results">
      <ListGroup>
        <label className="Type">{data.length > 0 ? type : ''}</label>
        {data.map((i) => (
          <ListGroup.Item key={i.external_id}>
            <FormatCustomData data={i} customKeys={customKeys} />
            <FormatCommonData commonData={i} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export default Result;
