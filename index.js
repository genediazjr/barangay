import { readFileSync } from 'fs';
const dump = JSON.parse(readFileSync('./barangay.json', 'utf-8'));
const barangay = (region, province, towncity) => {
  if (!region) {
    return Object.keys(dump);
  }
  if (!dump[region]) {
    throw new Error('Invalid region');
  }
  if (!province) {
    return Object.keys(dump[region]);
  }
  if (!dump[region][province]) {
    throw new Error('Invalid province');
  }
  if (!towncity) {
    return Object.keys(dump[region][province]);
  }
  if (!dump[region][province][towncity]) {
    throw new Error('Invalid town/city');
  }
  return dump[region][province][towncity];
};

barangay.dump = dump;

export default barangay;
