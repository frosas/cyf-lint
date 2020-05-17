# CYF Lint

A simple tool to quickly [lint](<https://en.wikipedia.org/wiki/Lint_(software)>)
your JavaScript code.

Its main goal is to highlight those practices that, while technically correct,
are generally discouraged:

- Potential syntax and logic errors
- Sloppy and unconventional coding style

## Usage

```bash
$ npx cyf-lint [--fix] <path>
```

You can find the details of any failing rule at https://eslint.org/docs/rules/

`--fix` fixes some of the failing rules automatically. While safe, it's a good
idea to use it on a repo without uncommitted changes.

### Example

```bash
$ cd my-project
$ npx cyf-lint .
```

## FAQ

- _How can I automatically run it every time I make a change in the code?_

  ```bash
  $ npx onchange -i '**/*.js' -- npx cyf-lint .
  ```

- _It takes a long time to run!_

  That's probably `npx` (re)installing `cyf-lint` every time it's executed. The
  only way to speed it up that I'm aware of is to manually install `cyf-lint`:

  ```bash
  $ npm install -g cyf-lint
  ```

  Note in this case you won't be using the latest version automatically. To
  ensure you are up to date, remember to update the package periodically:

  ```bash
  $ npm install -g cyf-lint@latest
  ```

- _I get warnings on a piece of code I consider legitimate. What can I do?_

  It may very well be a bug or that the rules are unfairly restrictive. In that
  case, please [file an issue](https://github.com/frosas/cyf-lint/issues).

  If it's more of an edge case and you would like to ignore that case especifically,
  you can do that by [commenting your code](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments).

## Development

To apply the rules to the project itself:

```bash
$ npm run dev
```

To apply the rules to other projects:

```bash
$ cd sample-project
$ npx onchange -i '**/*.js' '<cyf-lint-dir>/**' -- <cyf-lint-dir>/bin/cyf-lint .
```

## TODO

- `tsc` + `checkJs`
- Errors to link to the rules
- Integrated watch mode
- Expose ESLint config
