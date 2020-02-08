
import Search from '../Search.js';

const testOrgData = 
[
    {
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
}];
const testOrg = 
[
    {
        "_id": 112, 
        "url": "maddie.com"
    }, 
    {
        "_id": 113, 
        "url": "you.com"
    }, 
    {
        "_id": 114, 
        "url": "maddie.com"
    }

]

test('Single entry: if no match, return empty array', () => {
    const criteria = "money"; 
    const result = Search(criteria, "$$$$$", testOrgData); 
    expect(result).toStrictEqual([]); 
}); 


test('Single entry: match given a criteria which has an array for a value', () => {
    const criteria = 'tags'; 
    const val = 'West'; 
    const result = Search(criteria, val, testOrgData);
    expect(result).toStrictEqual(testOrgData); 
}); 

test('Arbitrary entries: match given simple criteria', () => {
    const criteria = '_id'; 
    const val = 112; 
    const result = Search(criteria, val, testOrg); 
    expect(result.length).toStrictEqual(1); 
    const result2 = Search("url", "maddie.com", testOrg);
    expect(result2.length).toStrictEqual(2); 
})
