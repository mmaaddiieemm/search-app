//import React from 'react';
//import { render } from '@testing-library/react';
import Search from '../Search.js';

const testOrgData = {
    "_id": 101,
    "url": "http://initech.zendesk.com/api/v2/organizations/101.json",
    "external_id": "9270ed79-35eb-4a38-a46f-35725197ea8d",
    "name": "Enthaze",
    "domain_names": [
        "kage.com",
        "ecratic.com",
        "endipin.com",
        "zentix.com"
    ],
    "created_at": "2016-05-21T11:10:28 -10:00",
    "details": "MegaCorp",
    "shared_tickets": false,
    "tags": [
        "Fulton",
        "West",
        "Rodriguez",
        "Farley"
    ]
};

test('if no match found, return empty array', () => {
    const criteria = "money"; 
    const result = Search(criteria, "", testOrgData); 
    expect(result).toStrictEqual([]); 
}); 

test('Given basic criteria, return the data in a readable format', () => {
    const criteria = 'name'; 
    const val = 'Enthaze'; 
    const expected = [testOrgData]; 
    const result = Search(criteria, val, [testOrgData]); 
    console.log(result);
    expect(result).toStrictEqual(expected); 
}); 