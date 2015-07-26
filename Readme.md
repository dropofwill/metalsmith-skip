# metalsmith-skip

  A metalsmith plugin to skip files. Based on metalsmith-drafts, but allows arbitrary keys (not just `draft`).

## Installation

    $ npm install metalsmith-skip

## CLI Usage

  Install via npm and then add the `metalsmith-skip` key to your `metalsmith.json` plugins, like so:

```json
{
  "plugins": {
    "metalsmith-skip": {
      "keys": ["skip", "draft"]
    }
  }
}
```

  Then in your files YAML front-matter add `draft: true`.

## Javascript Usage

  Pass the plugin to `Metalsmith#use`, like so:

```js
var skip = require('metalsmith-skip');

metalsmith.use(skip({keys: ["skip", "draft"]));
```

  Then in your files YAML front-matter add `skip: true`.

## License

  MIT
