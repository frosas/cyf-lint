# CYF Lint

## Usage

```bash
$ npx cyf-lint [--fix] <path>
```

`--fix` fixes some of the errors automatically. Make sure to run it on a repo
without pending changes.

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
