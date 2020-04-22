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
  - yarn workspace @mevn/server add @packages/common did not work
  - @1.0.0 -> need to specify version

## Resources

- https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
- https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d
- http://orlandobayo.com/blog/monorepo-testing-using-jest/