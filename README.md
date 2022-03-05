# @heusalagroup/hgm

This is Heusala Group's git module manager.

In reality, it is just a smarter command line interface to use Git's SubModules.

*Note!* It's still quite experimental and in active development.

### Install the command globally from NPM

```shell
npm i -g @heusalagroup/hgm
```

### Install [fi.hg.core](https://github.com/heusalagroup/fi.hg.core) as a git submodule to ./src/fi/hg/core

```shell
hgm update fi.hg.core
```

This is essentially same as following raw commands:

```shell
mkdir -p src/fi/hg
git submodule add git@github.com:heusalagroup/fi.hg.core.git src/fi/hg/core
git config -f .gitmodules submodule.src/fi/hg/core.branch main
```

...except it can detect state and only execute steps which are needed.

The `hgm install` is same as `hgm update`.

### Update all local git submodules

```shell
hgm update
```
This is essentially same as following raw commands:

```shell
git pull
git submodule update --init
```
