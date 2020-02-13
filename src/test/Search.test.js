
import Search from '../Search';

const testOrgData = [
  {
    _id: 101,
    url: 'http://initech.zendesk.com/api/v2/organizations/101.json',
    external_id: '9270ed79-35eb-4a38-a46f-35725197ea8d',
    name: 'Enthaze',
    domain_names: [
      'kage.com',
      'ecratic.com',
      'endipin.com',
      'zentix.com',
    ],
    created_at: '2016-05-21T11:10:28 -10:00',
    details: 'MegaCorp',
    shared_tickets: false,
    tags: [
      'Fulton',
      'West',
      'Rodriguez',
      'Farley',
    ],
  }];
const testOrg = [
  {
    _id: 112,
    url: 'maddie.com',
    description: '',
    assignee_id: 21,
    submitter_id: 20,
    is_fake: 'maybe',
  },
  {
    _id: 113,
    url: 'you.com',
    description: 'why do i like to describe',
    assignee_id: 22,
    submitter_id: 22,
  },
  {
    _id: 114,
    url: 'maddie.com',
    description: 'non-empty description!',
    assignee_id: 1,
    submitter_id: 202,
    is_fake: 'probably',
  },

];

test('Single entry: if no match, return empty array', () => {
  const criteria = 'money';
  const result = Search(criteria, '$$$$$', testOrgData);
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
  const result2 = Search('url', 'maddie.com', testOrg);
  expect(result2.length).toStrictEqual(2);
});

test('A user can search for empty values', () => {
  const criteria = 'description';
  const val = '';
  const result = Search(criteria, val, testOrg);
  expect(result.length).toStrictEqual(1);
  expect(result[0]._id).toStrictEqual(112);
});

test('Return an entry only once if the contents match multiple times', () => {
  const criteria = '_id';
  const result = Search(criteria, 22, testOrg);
  expect(result.length).toStrictEqual(1);
});

test('Return an empty array if any of the input values are null', () => {
  let result = Search(null, '231', testOrg);
  expect(result.length).toStrictEqual(0);
  result = Search('ids', null, testOrg);
  expect(result.length).toStrictEqual(0);
  result = Search('ids', 12, null);
  expect(result.length).toStrictEqual(0);
});

test('If the user searches for a key that doesnt exist, return applicable items', () => {
  const result = Search('is_fake', 'undefined', testOrg);
  expect(result.length).toStrictEqual(1);
  expect(result[0]._id).toStrictEqual(113);
});

test('Search functionality is case-insensitive', () => {
  const result = Search('Is_Fake', 'MayBe', testOrg ); 
  console.log(result); 
  expect(result[0]._id).toStrictEqual(112); 
})
