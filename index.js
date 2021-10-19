import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dump = JSON.parse(readFileSync(resolve(__dirname, './barangay.json'), 'utf-8'));
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
