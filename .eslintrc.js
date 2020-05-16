module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "array-callback-return": ["error"],
    complexity: ["warn", { max: 5 }], // TODO Change max?
    "consistent-return": ["error"],
    // TODO https://eslint.org/docs/rules/curly?
    "dot-notation": ["warn"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-implicit-coercion": ["error"],
    // TODO "no-implicit-globals": ["error"]
    "no-loop-func": ["error"],
    // TODO https://eslint.org/docs/rules/no-magic-numbers?
    "no-multi-spaces": ["warn"],
    // TODO https://eslint.org/docs/rules/no-param-reassign?
    // TODO "no-restricted-properties": ["error", { property: "innerHTML" }],
    "no-sequences": ["error"],
    "no-throw-literal": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": ["error"],
    "prefer-promise-reject-errors": ["error"],
    // TODO https://eslint.org/docs/rules/strict
    "array-bracket-newline": ["warn", "consistent"],
    "array-element-newline": ["warn", "consistent"],
    // TODO https://eslint.org/docs/rules/brace-style
    // TODO https://eslint.org/docs/rules/camelcase
    // TODO https://eslint.org/docs/rules/comma-spacing
    "comma-spacing": ["warn"],
    "func-call-spacing": ["warn"],
    // TODO https://eslint.org/docs/rules/indent
    "keyword-spacing": ["warn"],
    "max-depth": ["warn", 3],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "max-lines-per-function": [
      "error",
      { max: 40, skipBlankLines: true, skipComments: true },
    ],
    "max-params": ["warn"],
    "max-statements-per-line": ["warn", { max: 2 }],
    "no-lonely-if": ["warn"],
    "no-unneeded-ternary": ["error"],
    "no-whitespace-before-property": ["warn"],
    "one-var": ["warn", "never"],
    semi: ["warn"], // TODO How to check either always or never?
    "semi-style": ["warn"],
    "space-before-blocks": ["warn"],
    "space-in-parens": ["warn"],
    "space-infix-ops": ["warn"],
    "space-unary-ops": ["warn"],
    "no-shadow": ["error"],
    // TODO https://eslint.org/docs/rules/#stylistic-issues
    "no-var": ["error"],
    // TODO "prefer-template": ["warn"],
  },
};
