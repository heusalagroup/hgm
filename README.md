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

This is essentially same as following raw commands:

```
mkdir -p src/fi/hg
git submodule add git@github.com:heusalagroup/fi.hg.core.git src/fi/hg/core
git config -f .gitmodules submodule.src/fi/hg/core.branch main
```

...except it can detect state and only updates what is changed.

The `hgm install` is same as `hgm update`.

### Update all local git submodules

```shell
hgm update
```
