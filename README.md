# Users widget for Auth0

## Development

To setup the development enviroment run the following commands (one
time).

```sh
npm install -g babel-cli
npm install  babel-preset-react babel-preset-es2015
```

Then run the following command tu compile the JS automatically when
the source changes.

```sh
babel src/ -w --out-dir build/
```

Finally open _index.html_ in your favourite browser.
