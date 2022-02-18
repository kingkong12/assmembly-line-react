// Reference: https://eslintconfig.dev/cra/typescript-prettier
// Full List of Extension Rules: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: ['src/assets/**', 'src/tests/**'],
  extends: [
    'react-app', // Create React App base settings
    'eslint:recommended', // recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with Prettier.
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display Prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['unicorn'],
  // default rules
  rules: {
    'no-use-before-define': 'off', // HACK https://github.com/typescript-eslint/typescript-eslint/issues/2540
    '@typescript-eslint/no-use-before-define': ['warn'], // HACK https://github.com/typescript-eslint/typescript-eslint/issues/2540
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
  },
  overrides: [
    // entire repo overrides
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
      },
    },
    // components and pages file names
    {
      files: [
        'src/components/**/*.ts',
        'src/components/**/*.tsx',
        'src/pages/**/*.tsx',
        'src/pages/**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
    // icon filenames
    {
      files: ['src/components/iconPaths/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
    // declarations overrides
    {
      files: ['src/App.tsx', 'config-overrides.js', 'src/**/*.d.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'unicorn/filename-case': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
    // server files overrides
    {
      files: ['server.js', 'server/*.js', 'src/setupProxy.js'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
  ],
}
