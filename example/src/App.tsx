import React from 'react'

import DraggableArray from 'react-draggable-array'
import 'react-draggable-array/dist/index.css'

import _one from './imgs/1.png'
import _two from './imgs/2.png'
import _three from './imgs/3.png'
import _four from './imgs/4.png'
import _five from './imgs/5.png'
import _six from './imgs/6.png'

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

  return (
    <>
      <div className="app">
        <section>
          <h1 className="title">Array of objects into cards</h1>
          <DraggableArray className="draggable-cont">
            {OBJ_STRING_ITEMS.map(({ thing, name }, i) => (
              <div key={i} className="card">
                <h1 className="card-h">{name}</h1>
                <p className="card-p">{thing}</p>
              </div>
            ))}
          </DraggableArray>
        </section>
        <section>
          <h1 className="title">String arrays are fine too </h1>
          <DraggableArray>
            {STRING_ITEMS.map((item, i) => (
              <p key={i} className="string">{item}</p>
            ))}
          </DraggableArray>
        </section>
      </div>
    </>
  )
}

export default App
