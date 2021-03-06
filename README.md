[![Node CI](https://github.com/bmacher/mevn-template/workflows/Node%20CI/badge.svg)](https://github.com/bmacher/mevn-template/actions?query=workflow%3A%22Node+CI%22)
[![GitHub license](https://img.shields.io/github/license/bmacher/mevn-template.svg)](https://github.com/bmacher/mevn-template/blob/master/LICENSE)
[![Dependabot Enabled](https://api.dependabot.com/badges/status?host=github&repo=bmacher/mevn-template)](https://github.com/bmacher/mevn-template/network/updates)

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
- client add @mevn/common
  -  `../common/dist/index.js' should be in one project
  - moved from dist/index.js to src/index.ts because common is included into build direcly
  - add resolve with alias to webpack in vue.config.js
  - add project to eslintrc
  - https://forum.vuejs.org/t/monorepo-for-a-mevn-stack-application/93998

## Resources

- https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
- https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d
- http://orlandobayo.com/blog/monorepo-testing-using-jest/
