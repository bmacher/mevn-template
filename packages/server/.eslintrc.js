module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true
    },
    sourceType: 'module',
  },

  plugins: [
    'import',
    '@typescript-eslint',
    'prettier'
  ],

  extends: [
    'airbnb-typescript'
  ],

  env: {
    node: true
  },

  settings: {
    'import/resolver': {
      typescript: {
        // To resolve local depedencies under paths: {}
        directory: "."
      },
      // To resolve @types like aws-lambda
      node: {
        "extensions": [".js", ".ts", ".tsx", ".d.ts"],
        "paths": ["node_modules/", "node_modules/@types/"]
      },
    }
  },

  rules: {
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-continue': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-syntax': [
      'off',
      {
        selector: 'ForInStatement'
      },
      {
        selector: 'ForOfStatement'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // No 'I' prefix for interfaces
        // Guideline by TypeScript for contributers.
        // https://github.com/microsoft/TypeScript/wiki/Coding-guidelines#names
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^[^I]',
          match: true,
        },
      },
    ],
  }
}