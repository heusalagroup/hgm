# @heusalagroup/hgm

This is Heusala Group's module manager.

In reality, it is just a smarter command line interface to manage Git's SubModules.

*Note!* It's still quite experimental and in active development.

### Install the command globally from NPM

```shell
npm i -g @heusalagroup/hgm
```

### Install as a git submodule to ./src/fi/hg/core

```shell
hgm update fi.hg.core
```

### Install as a git submodule to ./fi/hg/core

```shell
hgm update fi.hg.core fi/hg/core
```

### Update all local git submodules

```shell
hgm update
```
