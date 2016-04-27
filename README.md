# string-dasherize
Converts a underscored or camelized string into an dasherized one

## Install

```sh
$ npm install --save string-dasherize
```

## Example

```js
var stringDasherize = require('string-dasherize');
console.log(stringDasherize('FrontEnd'));

// -> -front-end

console.log(stringDasherize('front_end'));

// -> front-end
```

### `require('string-dasherize')(string)`

**Arguments**:

- `string`: list be the single array

**Returns**: Converts a underscored or camelized string into an dasherized one

## License

&copy; 2016 Vikram Jadhav. MIT License
