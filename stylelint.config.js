module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'for',
          'include',
          'each',
          // 'function',
          // 'if',
          // 'else',
          // 'util',
          // 'return',
          // 'extend',
        ],
      },
    ],
  },
}
