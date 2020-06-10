import * as React from 'react'
import { useState } from 'react'

import styles from './styles.module.css'

const DraggableArray: React.FC<props> = ({ children, className, state, col, row }) => {

  const childArr: any[] = []
  React.Children.forEach(children, (child?: any) => childArr.push(child))

  const [externalState, setExternalState] = useState<any[]>(state)
  const [localState, setLocalState] = useState<any[]>(childArr)

  const [draggedItem, setDraggedItem] = useState<[]>()
  const [draggedOverItem, setDraggedOverItem] = useState<[]>()

  const onDragStart = (e: any | React.DragEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>, index: number): void => {
    setDraggedItem(localState[index])
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 40, 35)
  }

  const onDragOver = (index?: number | any): void => {
    setDraggedOverItem(localState[index])
    if (draggedItem === draggedOverItem) return
    let newArr = localState.filter((item: []) => {
      return item !== draggedItem
    })
    newArr.splice(index, 0, draggedItem)
    updateExternalState(externalState, index, 0)
    setLocalState(newArr)
  }

  var updateExternalState = function (arr: any[], indexA: number, indexB: number) {
    console.log(indexA);
    console.log(indexB);

    // var temp = arr[indexA];
    // arr[indexA] = arr[indexB];
    // arr[indexB] = temp;
    setExternalState(arr)
  };

  const returnNewArrState = () => {
    console.log('external state -> ', externalState);
    console.log('local state -> ', localState);

    return localState
  }

  const onDragEnd = () => {
    console.log('end');
    returnNewArrState()
  }

  const renderChildren = (type: string, props: {}, children: any, index: number): any => {
    const dragProps = {
      draggable: true,
      onDragStart: (e: unknown) => onDragStart(e, index),
      onDragOver: () => onDragOver(index),
      onDragEnd: () => onDragEnd()
    }

    // const childrenType = () => (typeof children !== 'object') ? children : children.item

    if (children && typeof children !== 'string') {
      return (
        React.Children.map(
          children,
          child => (
            React.cloneElement(
              child,
              { ...dragProps }
            )
          )
        )
      )
    } else {
      return (
        React.createElement(
          type,
          { ...props, ...dragProps },
          children
        )
      )
    }
  }

  const mainClassName = () => {
    if (col) {
      return `${styles.mainCol} ${className}`
    } else if (row) {
      return `${styles.mainRow} ${className}`
    } else {
      return `${styles.main} ${className}`
    }
  }

  const childrenClassName = (props: any) => {
    if (children && typeof children !== 'string') {
      return styles.li + ' ' + props.className
    } else {
      return styles.li
    }
  }

  return (
    <div className={mainClassName()}>
      {localState.map(({ type, props, props: { children } }, index) => (
        <li key={index}
          className={childrenClassName(props)}
          style={children ? { ...props.style } : {}}
          draggable={true}>
          {renderChildren(type, props, children, index)}
        </li>
      ))}
    </div>
  )
}

export default DraggableArray