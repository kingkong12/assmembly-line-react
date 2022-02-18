// More details go to:
// - https://commitlint.js.org/#/reference-configuration
// - https://commitlint.js.org/#/reference-rules
// - https://www.conventionalcommits.org/en/v1.0.0/
// - https://github.com/conventional-changelog/commitlint/issues/607

module.exports = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   */
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\(([MIT]+-[0-9]+)\))?\: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  /*
   * Resolve and load @commitlint/format from node_modules.
   */
  formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'hotfix', 'build', 'ci'],
    ],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'upper-case'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'never', 100],
    'subject-min-length': [2, 'never', 3],
  },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  ignores: [(commit) => commit === ''],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
}
