# @heusalagroup/hgm

This is Heusala Group's command line (Git Submodule) Manager.

### Install the command globally

```
npm i -g @heusalagroup/hgm
```

### ...and use it

```
hgm PATH [URL [BRANCH]]
```

* The `PATH` is the local directory for the module.
* The `URL` is either `git@host:path`. 
  If the name is `organization/name`, then it's converted to `git@github.com:organization/name.git`.
* The `BRANCH` is the branch to use. It defaults to `main`.

The command will update the git module state to match provided.
