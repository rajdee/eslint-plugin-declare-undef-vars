/**
 * @fileoverview Get list of the undefined variables
 * @author Ruslan Abdullaev
 */

"use strict";

const isTypeOfOperator = node => {
    const parent = node.parent;

    return parent.type === "UnaryExpression" && parent.operator === "typeof";
};


module.exports = {
    meta: {
        type: 'problem',

        docs: {
            description: "Get list of the undefined variables",
            recommended: false,
        },
        fixable: "code",
        schema: [
            {
                type: "object",
                properties: {
                    typeof: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],
        messages: {
            undef: "'{{name}}' isn't defined."
        }
    },

    create(context) {
        const options = context.options[0];
        const sourceCode = context.sourceCode;
        const isOptionsTypeOf = options && options.typeof === true || false;

        return {
            "Program:exit"(node) {
                let identifiersMap = new Map();
                const sourceScope = sourceCode.getScope(node);

                for (const ref of sourceScope.through) {
                    const identifier = ref.identifier;

                    // skip typeof operator
                    if (!isOptionsTypeOf && isTypeOfOperator(identifier)) {
                        return;
                    }

                    context.report({
                        node: identifier,
                        messageId: "undef",
                        data: identifier,
                        fix(fixer) {
                            if (!identifiersMap.has(identifier.name)) {
                                identifiersMap.set(identifier.name, true);
                                return fixer.insertTextAfter(node, `\n//${identifier.name},`);
                            }
                        }
                    });
                }

                identifiersMap = undefined;
            }
        };
    }
};
