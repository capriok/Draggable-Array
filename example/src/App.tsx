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

  const OBJ_IMG_ITEMS = [
    { item: _one, },
    { item: _two, },
    { item: _three, },
    { item: _four, },
    { item: _five, },
    { item: _six, }
  ]

  const OBJ_STRING_ITEMS = [
    { item: '🦜', name: 'parrot' },
    { item: '🦖', name: 'dinosaur' },
    { item: '🦆', name: 'duck' },
    { item: '🦔', name: 'porkypine' },
    { item: '🐤', name: 'chick' },
    { item: '🐧', name: 'penguin' }
  ]

  const IMG_ITEMS = [
    _one,
    _two,
    _three,
    _four,
    _five,
    _six,
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
      <DraggableArray>
        {OBJ_IMG_ITEMS.map(({ item }, i) => (
          <div style={{ margin: 20, textAlign: 'center' }}>
            <img style={{ width: 50 }}
              key={i}
              src={item}

              alt="" />
            <p>images</p>
          </div>
        ))}
      </DraggableArray>
      <DraggableArray>
        {OBJ_STRING_ITEMS.map(({ item, name }, i) => (
          <div key={i} style={{ margin: 20, padding: 20, textAlign: 'center', border: ' 1px solid black' }}>
            <h1 >Card</h1>
            <p style={{ paddingBottom: 10 }}>{item}</p>
            <p>{name}</p>
          </div>
        ))}
      </DraggableArray>
      <DraggableArray>
        {IMG_ITEMS.map((item, i) => (
          <img style={{ margin: 20, width: 40 }}
            key={i}
            src={item}
            alt="">
          </img>
        ))}
      </DraggableArray>
      <DraggableArray>
        {STRING_ITEMS.map((item, i) => (
          <p key={i} style={{ margin: 20, textAlign: 'center' }}>{item}</p>
        ))}
      </DraggableArray>
    </>
  )
}

export default App
