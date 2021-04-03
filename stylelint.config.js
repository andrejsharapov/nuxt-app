module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'for',
          // 'function',
          // 'if',
          // 'else',
          // 'each',
          'include',
          // 'util',
          // 'return',
          // 'extend',
        ],
      },
    ],
  },
}
