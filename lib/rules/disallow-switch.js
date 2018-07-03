/**
 * @fileoverview Rule to disallow switch statements
 * @author Andreas Wiedel
 */
'use strict';

const create = function (context) {
    function reportSwitchStatement(node) {
        context.report({
            node,
            message: 'Unallowed use of `switch` statement'
        });
    }

    return {
        SwitchStatement: reportSwitchStatement
    };
};

module.exports = {
    create,
    meta: {
        docs: {
            description: 'prevent the usage of switch statements',
            category: 'Best Practices',
            recommended: true
        },
        schema: []
    }
};
