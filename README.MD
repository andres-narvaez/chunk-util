
# Chunk Util

Split Arrays or Objects in smaller group of chunks based on `chunkSize` parameter.

## Array example

```js
const mockArray = ["a", "b", "c", "d", "e", "f"]

```

## Usage

```js
const buildChunks = require('chunk-util');

```

## Array example

```js
const mockArray = ["a", "b", "c", "d", "e", "f"]
const splitChunkSizeTwo = buildChunks(mockArray, 2)

console.log(splitChunkSizeTwo) // => [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]

```

## Object example

```js
const mockObject = {
    "test-1": {
        "example-1": "Property Value 1"
    },
    "test-2": {
        "example-2": "Property Value 2"
    },
    "test-3": {
        "example-3": "Property Value 3"
    },
    "test-4": {
        "example-4": "Property Value 4"
    },
    "test-5": {
        "example-5": "Property Value 5"
    }
}
const splitChunkSizeTree = buildChunks(mockObject, 3)

console.log(splitChunkSizeTwo)
/* =>
[
    [
        { 'test-1': { 'example-1': 'Property Value 1' } },
        { 'test-2': { 'example-2': 'Property Value 2' } },
        { 'test-3': { 'example-3': 'Property Value 3' } }
    ],
    [
        { 'test-4': { 'example-4': 'Property Value 4' } },
        { 'test-5': { 'example-5': 'Property Value 5' } }
    ]
]
*/

```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install chunk-util
```
## License

(MIT)

Copyright (c) 2018 Andres Narvaez &lt;dg.andres.narvaez@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
