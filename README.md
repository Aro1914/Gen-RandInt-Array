# Gen-RandInt-Array

## Contents

- [Gen-RandInt-Array](#gen-randint-array)
  - [Contents](#contents)
  - [Description](#description)
  - [Usage](#usage)
    - [Client-side and Server-side](#client-side-and-server-side)
  - [Requirements](#requirements)
  - [Contributors](#contributors)
  - [Contributing](#contributing)
  - [License](#license)

## Description

Gen-RandInt-Array is a helper function to help you generate an array with a length of your choice and given the min and max range as ±negPos

Compatible with both client-side and server-side environments.

## Usage

### Client-side and Server-side

Install the **Gen-RandInt-Array** package with [NPM](https://www.npmjs.org/):

```sh
npm install gen-randint-array
```

In your package.json, set "type" to "module" to enable you import a module.

```json
"type" : "module"
```

Or you can rename the javascript file the module is to be used to have the .mjs extension:

That is from `index.js` to `index.mjs`

Now when that is done, in your application code, import the **genRandIntArray()** method and assign the return value to a variable:

```js
import genRandIntArray from 'gen-randint-array';

const array = genRandIntArray(10, 10); //
```

## Requirements

The Gen-RandInt-Array helper function has zero dependencies.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

The Gen-RandInt-Array Project is released under the [Apache License](http://www.apache.org/licenses/).
