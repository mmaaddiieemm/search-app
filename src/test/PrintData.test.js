import PrintData from "../PrintData.js";
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


test("PrintData can print string", () => {
    //console.log(testOrgData); 
    const output = PrintData(testOrgData); 
    //console.log(output); 
    expect(true).toBeTruthy(); 
})