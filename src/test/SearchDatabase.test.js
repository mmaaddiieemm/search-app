// import SearchDatabase from '../SearchDatabase.js';

// // this is another big chunk, we want to make sure we can actually
// // pass in criteria and get the right stuff out...
// const testOrgData = [
//   {
//     _id: 101,
//     url: 'http://initech.zendesk.com/api/v2/organizations/101.json',
//     external_id: '9270ed79-35eb-4a38-a46f-35725197ea8d',
//     name: 'Enthaze',
//     organization_id: 101,
//     domain_names: [
//       'kage.com',
//       'ecratic.com',
//       'endipin.com',
//       'zentix.com',
//     ],
//     created_at: '2016-05-21T11:10:28 -10:00',
//     details: 'MegaCorp',
//     shared_tickets: false,
//     tags: [
//       'Fulton',
//       'West',
//       'Rodriguez',
//       'Farley',
//     ],
//   }];

// test('when a single option flag is used, search only that database', () => {
//   const key = '_id';
//   const value = '111';
//   const result = SearchDatabase(key, value);
//   // expect(result.length).toBe(1);
//   expect(true);
// });

// test('return the exact number of matches... ', () => {
//   const result = SearchDatabase('verified', true);
//   expect(result.length).toStrictEqual(26);
// });

// test('return all the relevant data for a given organization ID', () => {
//   const idValue = '121';
//   const result = SearchDatabase('id', idValue);
//   console.log(result);
//   expect(result.length).toStrictEqual(8); // 2 (users) + 1 (org) + 5(tickets)
// });
