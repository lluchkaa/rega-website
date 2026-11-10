import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { importX } from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import {
  navigationRules,
  persistenceRules,
  uikitRules,
} from './eslint/ui-policy.js'
import uiStyle from './eslint/ui-style.js'

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'coverage/**',
    '.husky/_/**',
    '.direnv/**',
    'playwright-report/**',
    'test-results/**',
    'next-env.d.ts',
  ]),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
  },
  ...nextVitals,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: { 'import-x': importX },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({ project: './tsconfig.json' }),
      ],
    },
    rules: {
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-x/no-self-import': 'error',
      'import-x/no-cycle': ['error', { ignoreExternal: true }],
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          pathGroups: [
            {
              pattern: '**/*.{avif,gif,jpeg,jpg,png,svg,webp}',
              group: 'object',
            },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'sort-imports': [
        'error',
        { ignoreDeclarationSort: true, ignoreCase: true },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['./**', '../**'],
              message: 'Use @/ for application imports.',
            },
            {
              group: ['next/router', 'react-router', 'react-router-dom'],
              message:
                'Use App Router navigation via next/navigation or @/i18n/navigation.',
            },
          ],
        },
      ],
      'import-x/no-restricted-paths': [
        'error',
        {
          basePath: import.meta.dirname,
          zones: [
            {
              target: './src/components',
              from: './src/app',
              message: 'Shared UI must not import page-local implementation.',
            },
            {
              target: './src/components/uikit',
              from: './src/components',
              except: ['./uikit'],
              message: 'UIKit must not depend on application UI.',
            },
            {
              target: './src/components/uikit',
              from: ['./src/app', './src/stores', './src/hooks', './src/i18n'],
              message: 'UIKit must stay independent of application code.',
            },
            {
              target: './src/stores',
              from: ['./src/app', './src/components', './src/hooks'],
              message: 'Stores must not depend on UI or entry points.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/components/uikit/**'],
    rules: {
      ...uikitRules,
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            ...uikitRules['no-restricted-imports'][1].patterns,
            {
              group: ['./**', '../**'],
              message: 'Use @/ for application imports.',
            },
            {
              group: ['next/router', 'react-router', 'react-router-dom'],
              message: 'Use Next App Router navigation.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/stores/persistence/**', '**/*.test.ts'],
    rules: persistenceRules,
  },
  {
    files: ['src/**/*.tsx'],
    plugins: { 'ui-style': uiStyle },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      'no-restricted-syntax': [
        'error',
        ...navigationRules['no-restricted-syntax'].slice(1),
        ...uikitRules['no-restricted-syntax'].slice(1),
      ],
      '@next/next/no-img-element': 'error',
      'jsx-a11y/control-has-associated-label': 'error',
      'ui-style/component-style': 'error',
      'max-lines-per-function': [
        'error',
        { max: 100, skipBlankLines: true, skipComments: true },
      ],
    },
    settings: {
      'jsx-a11y': { components: { Button: 'button', Link: 'a', Image: 'img' } },
    },
  },
  {
    files: ['src/components/uikit/**/*.tsx'],
    rules: {
      ...navigationRules,
      'ui-style/component-style': 'off',
      'max-lines-per-function': 'off',
    },
  },
  // The static root chooser uses explicit language URLs. Localized UI uses the wrapper.
  {
    files: ['src/**/*.tsx'],
    ignores: [
      'src/app/(entry)/**',
      'src/app/global-not-found.tsx',
      'src/components/uikit/**',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            ...uikitRules['no-restricted-imports'][1].patterns,
            {
              group: ['./**', '../**'],
              message: 'Use @/ for application imports.',
            },
            {
              group: ['next/link'],
              message: 'Use the locale-aware Next Link from @/i18n/navigation.',
            },
            {
              group: ['next/router', 'react-router', 'react-router-dom'],
              message: 'Use Next App Router navigation.',
            },
          ],
        },
      ],
    },
  },
  prettier,
  { rules: { curly: ['error', 'all'], eqeqeq: ['error', 'always'] } },
])
