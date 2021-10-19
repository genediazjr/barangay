import { test } from 'tap';
import barangay from './index.js';

test('barangay.dump', ({ ok, end }) => {
  ok(barangay.dump, 'has dump');
  ok(Object.keys(barangay.dump).length > 0, 'has keys');
  end();
});

test('baragay(region)', ({ ok, throws, end }) => {
  ok(barangay().length > 0, 'returns a non empty array');
  ok(barangay('NATIONAL CAPITAL REGION').length > 0, 'returns non empty array on valid region');
  throws(() => barangay('x'), {}, 'throws on invalid region');
  end();
});

test('baragay(region, province)', ({ ok, throws, end }) => {
  ok(barangay('NATIONAL CAPITAL REGION', 'METRO MANILA').length > 0, 'returns non empty array on valid province');
  throws(() => barangay('NATIONAL CAPITAL REGION', 'x'), {}, 'throws on invalid province');
  end();
});

test('baragay(region, province, towncity)', ({ ok, throws, end }) => {
  ok(barangay('NATIONAL CAPITAL REGION', 'METRO MANILA', 'CITY OF MANILA').length > 0, 'returns non empty array on valid town/city');
  throws(() => barangay('NATIONAL CAPITAL REGION', 'METRO MANILA', 'x'), {}, 'throws on invalid town/city');
  end();
});

// test('baragay()', (ok, end) => {

//   end();
// });
