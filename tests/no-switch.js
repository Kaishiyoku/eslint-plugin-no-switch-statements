import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../lib/rules/no-switch';

const ruleTester = avaRuleTester(test, {
    env: {
        es6: true
    },
    parseOptions: {
        sourceType: 'module'
    }
});

const error = {
    ruleId: 'no-switch',
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

ruleTester.run('no-switch', rule, {
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
