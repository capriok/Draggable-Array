<h1 align="center">Draggable Array</h1>

[![NPM](https://img.shields.io/npm/v/react-draggable-array.svg)](https://www.npmjs.com/package/react-draggable-array)

Wrapper component utilizing native browser drag API for its children. Happy dragging.

## Install

Available as an [npm package](https://www.npmjs.com/package/react-draggable-array)

```sh
npm install --save react-draggable-array
```

## Usage

```js
import React from 'react'

// Import the component
import DraggableArray from 'react-draggable-array'
// Import the css
import 'react-draggable-array/dist/index.css'

const App = () => {

  // Define the array
  const items = [ '🦜', '🦖', '🦆', '🦔', '🐤', '🐧' ]

  return (
    // Wrap a map of the items in the DraggableArray component
    <DraggableArray>
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </DraggableArray>
  )
}

```
[![Edit Button](https://svgshare.com/i/KAx.svg)](https://codesandbox.io/s/react-draggable-array-2kdql)

## Options
| prop | action  |
| :-------------|:------------- |
| className | apply a className to the Wrapper Component |
| row ( default ) | displays children in row orientation |
| col | displays children in col orientation |  


## License
This project is licensed under the terms of the [MIT license](/LICENSE)