import React from 'react'

import DraggableArray from 'react-draggable-array'
import 'react-draggable-array/dist/index.css'

// import parrot from './imgs/parrot.png'
// import dino from './imgs/dino.png'
// import duck from './imgs/duck.png'
// import porky from './imgs/porky.png'
// import chick from './imgs/chick.png'
// import penguin from './imgs/penguin.png'

const App = () => {

  const OBJ_STRING_ITEMS = [
    { thing: '🦜', name: 'Parrot' },
    { thing: '🦖', name: 'Dinosaur' },
    { thing: '🦆', name: 'Duck' },
    { thing: '🦔', name: 'Porkypine' },
    { thing: '🐤', name: 'Chick' },
    { thing: '🐧', name: 'Penguin' }
  ]

  const STRING_ITEMS = [
    '🦜',
    '🦖',
    '🦆',
    '🦔',
    '🐤',
    '🐧'
  ]

  const [state1,] = React.useState(OBJ_STRING_ITEMS)
  const [state2,] = React.useState(STRING_ITEMS)

  return (
    <>
      <div className="app">
        <section>
          <h1 className="title">Array of objects into cards</h1>
          <DraggableArray state={state1} className="draggable-cont">
            {state1.map(({ thing, name }, i) => (
              <div key={i} className="card">
                <h1 className="card-h">{name}</h1>
                <p className="card-p">{thing}</p>
              </div>
            ))}
          </DraggableArray>
        </section>
        <section>
          <h1 className="title">String arrays are fine too </h1>
          <DraggableArray state={state2}>
            {state2.map((item, i) => (
              <p key={i} className="string">{item}</p>
            ))}
          </DraggableArray>
        </section>
      </div>
    </>
  )
}

export default App
