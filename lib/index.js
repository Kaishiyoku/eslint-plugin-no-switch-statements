/**
 * @fileoverview An ESLint rule to totally disallow switch statements
 * @author Andreas Wiedel
 */
'use strict';

const reqAll = require('req-all');
const createIndex = require('create-eslint-index');
const rules = reqAll('rules', {camelize: false});

const recommendedRules = createIndex.createConfig({
    plugin: 'no-switch-statements',
    field: 'meta.docs.recommended'
}, rules);

module.exports = {
    rules,
    configs: {
        recommended: {
            rules: Object.assign({}, recommendedRules)
        }
    }
};
