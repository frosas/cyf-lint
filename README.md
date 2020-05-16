# CYF Lint

A simple tool to quickly [lint](<https://en.wikipedia.org/wiki/Lint_(software)>)
your JavaScript code.

## Usage

```bash
$ npx cyf-lint [--fix] <path>
```

Rules are detailed in https://eslint.org/docs/rules/

`--fix` fixes some of the failing rules automatically. Make sure to run it on a
repo without uncommitted changes.

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

## Development

```bash
$ npm run dev -- <path>
```
