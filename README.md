# Monorepo (M)EVN Stack

## Problems

- tsconfig
  - remove baseUrl, path
  - add rootDir, outDir to tsconfig.bundle
  - add exclude **dist & **node_modules to root tsconfig
- start:server
  - nodemon: Error: listen EADDRINUSE: address already in use
    - `--delay`
- package as dependency
  - yarn workspace @mevn/server add @mevn/common did not work
  - @0.1.0 -> need to specify version
- vue app add @mevn/common
  -  `../common/dist/index.js' should be in one project
  - https://github.com/vuejs/vue-cli/issues/2421

## Resources

- https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
- https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d
- http://orlandobayo.com/blog/monorepo-testing-using-jest/