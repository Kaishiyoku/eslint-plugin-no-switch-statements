/**
 * @fileoverview An ESLint rule to totally disallow switch statements
 * @author Andreas Wiedel
 */
'use strict';

const noSwitch = require('../lib/rules/no-switch');

module.exports = {
    rules: {
        'no-switch': noSwitch
    }
};
