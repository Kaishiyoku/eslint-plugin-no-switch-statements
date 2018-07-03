import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../lib/rules/disallow-switch';

const ruleTester = avaRuleTester(test, {
    env: {
        es6: true
    },
    parseOptions: {
        sourceType: 'module'
    }
});

const error = {
    ruleId: 'disallow-switch',
    message: 'Unallowed use of `switch` statement'
};

const switchContent = `var test = 3;
 switch (test) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.log('unknown');
}`;

ruleTester.run('disallow-switch', rule, {
    valid: [
        'function foo() {}'
    ],
    invalid: [
        {
            code: switchContent,
            errors: [error]
        },
        {
            code: `function foo() {
                ${switchContent}
            }`,
            errors: [error]
        }
    ]
});
