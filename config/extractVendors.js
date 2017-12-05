// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const fs = require('fs');
const paths = require('./paths');

const extractVendors = () => {
  if (!fs.existsSync(paths.appVendors)) {
    return null;
  }
  const vendors = require(paths.appVendors);
  if (Array.isArray(vendors)) {
    if (vendors.length === 0) {
      return null;
    }
    if (Array.isArray(vendors[0])) {
      vendors.forEach(vendor => {
        if (!Array.isArray(vendor)) {
          throw new Error('Wrong vendors');
        }
      });
      // vendors are defined as: [['moduleA', 'moduleB'], ['moduleC', 'moduleD']]
      const outputVendors = {};
      vendors.forEach((vendor, index) => {
        outputVendors[`vendor${index}`] = vendor;
      });
      return outputVendors;
    } else {
      vendors.forEach(vendor => {
        if (!(typeof vendor === 'string')) {
          throw new Error('Wrong vendors');
        }
      });
      // vendors are defined as: ['moduleA', 'moduleB']
      return { vendors };
    }
  } else if (typeof vendors === 'object') {
    // vendors are defined as: { vendorA: ['moduleA', 'moduleB'] }
    return vendors;
  } else {
    throw new Error('Wrong vendors');
  }
};

module.exports = extractVendors;
