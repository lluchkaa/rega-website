/** @type {import('dependency-cruiser').IConfiguration} */
const config = {
  forbidden: [
    { name: 'no-cycles', severity: 'error', from: {}, to: { circular: true } },
    {
      name: 'no-unresolved',
      severity: 'error',
      from: {},
      to: { couldNotResolve: true },
    },
    {
      name: 'no-undeclared-packages',
      severity: 'error',
      from: {},
      to: { dependencyTypes: ['npm-no-pkg', 'npm-unknown'] },
    },
    {
      name: 'shared-ui-no-pages',
      severity: 'error',
      from: { path: '^src/components/' },
      to: { path: '^src/app/' },
    },
    {
      name: 'uikit-no-app-dependencies',
      severity: 'error',
      from: { path: '^src/components/uikit/' },
      to: {
        path: '^src/(app|hooks|stores|i18n|messages)/|^src/components/(?!uikit/)',
      },
    },
    {
      name: 'stores-no-ui',
      severity: 'error',
      from: { path: '^src/stores/' },
      to: { path: '^src/(app|components|hooks)/' },
    },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    tsConfig: { fileName: 'tsconfig.json' },
    tsPreCompilationDeps: true,
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'node', 'default'],
    },
    reporterOptions: { dot: { collapsePattern: 'node_modules/[^/]+' } },
  },
}

export default config
