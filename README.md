# barangay

[![Node.js CI](https://github.com/genediazjr/barangay/actions/workflows/build.yml/badge.svg)](https://github.com/genediazjr/barangay/actions/workflows/build.yml)
[![CodeQL](https://github.com/genediazjr/barangay/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/genediazjr/barangay/actions/workflows/codeql-analysis.yml)

A simple list of barangays in the Philippines ordered into city/towns, provinces, then regions.

## Install

```sh
npm install --save barangay
```

## Usage

```js
import barangay from 'barangay';

// list all regions
const regions = barangay();

// use one of the regions to get the list of provinces
const NCR_PROVINCES = barangay('NATIONAL CAPITAL REGION');
// use one of the provinces to get list of towns and cities under that province
const METROMANILA_TOWNSCITIES = barangay('NATIONAL CAPITAL REGION', 'METRO MANILA');
// use the region, province, and town/city to get the list of barangays
const CITYOFMANILA_BARANGAYS = barangay('NATIONAL CAPITAL REGION', 'METRO MANILA', 'CITY OF MANILA');

// the values are case sensitive
// the function will throw if either the value is invalid or does not exist

// you can also get all the data
const allData = barangay.dump;
```
