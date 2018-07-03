/**
 * @fileoverview An ESLint rule to totally disallow switch statements
 * @author Andreas Wiedel
 */
'use strict';

const disallowSwitch = require('../lib/rules/disallow-switch');

module.exports = {
    rules: {
        'disallow-switch-statements': disallowSwitch
    }
};
