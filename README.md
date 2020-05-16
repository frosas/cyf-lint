# CYF Lint

## Usage

```bash
$ npx cyf-lint [--fix] <path>
```

Rules are detailed in https://eslint.org/docs/rules/

`--fix` fixes some of the failing rules automatically. Make sure to run it on a
repo without uncommitted changes.

### Examples

```bash
$ cd my-project
$ npx cyf-lint .
```

You can also run it in "watch mode":

```bash
$ cd my-project
$ npx onchange -i '**/*.js' -- npx cyf-lint .
```

## Development

```bash
$ npm run dev -- <path>
```
