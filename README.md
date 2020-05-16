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

## Development

```bash
$ npm run dev -- <path>
```

## TODO

- `tsc` + `checkJs`
- Errors to link to the rules
- Integrated watch mode
- Integrate ESLint config with dev's editor
