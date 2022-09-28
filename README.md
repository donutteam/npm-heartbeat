# Extended Map
A class that extends the base Map class with additional functionality.

## Installation
Install the package with NPM:

```
npm install @donutteam/extended-map
```

## Usage
This class functions just like the [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) class as it is a direct extension of it.

It also has the following added functionality:

### reset
Similar to the stock [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set) method, except it deletes any existing value with the same key before setting the new key.

```js
const test = new ExtendedMap();

test.set("a", "potato");
test.set("b", "cabbage");
test.set("c", "carrot");

// This will replace the "potato" string set above and also be on the end of the map.
test.reset("a", "spinach");
```

## License
[MIT](https://github.com/donutteam/extended-map/blob/main/LICENSE.md)