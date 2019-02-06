/*!
 * bclient.js - http clients for bcoin
 * Copyright (c) 2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

exports.NodeClient = require('./node');

const {WalletClient} = require('./wallet');
exports.WalletClient = WalletClient;
