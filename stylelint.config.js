module.exports = {
  extends: ['stylelint-config-prettier'],
  overrides: [
    {
      files: ['*.sass', '**/*.sass'],
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
    },
  ],
}
