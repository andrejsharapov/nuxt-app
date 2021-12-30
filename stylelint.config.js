module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-prettier',
  ],
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
