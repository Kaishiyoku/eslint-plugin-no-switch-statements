'use strict';

const reqAll = require('req-all');
const createIndex = require('create-eslint-index');
const index = require('./lib/index');

const rules = reqAll('lib/rules', {camelize: false});

const settings = {
    descriptionField: 'meta.docs.description',
    docPath: 'docs/rules'
};

const exampleConfiguration = {
    name: 'my-awesome-project',
    eslintConfig: {
        plugins: [
            'no-switch-statements'
        ],
        rules: index.configs.recommended.rules
    }
};

module.exports = {
    RULES: `\n${createIndex.createRulesDescription(settings, rules)}\n\n`,
    // eslint-disable-next-line prefer-template
    EXAMPLE_CONFIGURATION: '\n```json\n' + JSON.stringify(exampleConfiguration, null, 2) + '\n```\n'
};
