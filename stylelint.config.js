module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
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
