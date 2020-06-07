# react-draggable-array

<h1 align="center">Godspeed</h1>

[![NPM](https://img.shields.io/npm/v/react-draggable-array.svg)](https://www.npmjs.com/package/react-draggable-array)

React wrapper component  utilizing native browser drag API. Happy dragging.

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


## License
This project is licensed under the terms of the [MIT license](/LICENSE)