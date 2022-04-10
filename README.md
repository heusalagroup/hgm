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
(cd src/fi/hg/core && git pull --recurse-submodules && git submodule update --init)
```

...except it can detect current state and only execute steps which are needed.

### Update all local git submodules

```shell
hgm update
```
This is essentially same as following raw commands:

```shell
git pull --recurse-submodules
git submodule update --init --recursive
```

### Configuring user defined scopes

Our package system is user extendable.

You can configure your own namespaces by registering the domain and using our HTTP metadata 
service to configure your Github organization name.

When you own the domain `example.com`, it gives you access to define packages under `com.example`. 

You just need to:

 1. Register or already own the domain name 
 2. Configure the Github organization name by creating an JSON web resource at a URL 
    `https://example.com/.well-known/fi.hg.m.json` with the content as:

```json
{
  "fi.hg.github.org": "example"
}
```

The implementation uses the [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) HTTP interface.

#### Configuring user defined scopes using nginx

Using the `nginx` web server you can configure it with the following configuration:

```
location /.well-known/fi.hg.m.json {
    default_type application/json;
    return 200 '{"fi.hg.github.org": "example"}';
}
```

#### Configuring user defined scopes using Github Pages

Github pages do not by default include `.well-known` folder.

Append to your `_config.yml` an `include` configuration: 

```yml
include: [".well-known"]
```

...and add a JSON file at `./.well-known/fi.hg.m.json` with content:

```json
{
  "fi.hg.github.org": "example"
}
```
