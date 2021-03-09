/**
 * Set up esm ECMAScript module loader to 
 * support ECMSScript modules in node 6+
 * Ref: https://www.npmjs.com/package/esm
 */
const esmImport = require('esm')(module);
const splitArray = esmImport('../src/split-array')