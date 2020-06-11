import * as React from 'react'
import { useState } from 'react'

import styles from './styles.module.css'

type DragEvent = any | React.DragEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
type SetState = React.Dispatch<React.SetStateAction<any[]>>

const DraggableArray: React.FC<props> = ({ children, className, state, col, row }) => {

  const childArr: any[] = []
  React.Children.forEach(children, (child?: any) => childArr.push(child))

  const [externalState, setExternalState] = useState<any[]>(state)
  const [poppedItem, setPoppedItem] = useState<any>()

  const [internalState, setInternalState] = useState<any[]>(childArr)
  const [draggedItem, setDraggedItem] = useState<[]>()
  const [draggedOverItem, setDraggedOverItem] = useState<[]>()

  const onDragStart = (e: DragEvent, index: number): void => {
    setDraggedItem(internalState[index])
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 40, 35)

    setPoppedItem(externalState[index])

    const newExternalState = externalState
    newExternalState.splice(index, 1)
    setExternalState(newExternalState)
  }

  const onDragOver = (index?: number | any): void => {
    setDraggedOverItem(internalState[index])

    if (draggedItem === draggedOverItem) return

    updateState(internalState, setInternalState, index, draggedItem)
    updateState(externalState, setExternalState, index, poppedItem)
  }

  const updateState = (state: any[], setState: SetState, index: number, item: any) => {
    const newState = state.filter((el: any) => {
      return el !== item
    })
    newState.splice(index, 0, item)
    setState(newState)
  }

  const onDragEnd = () => {
    console.log(externalState);
    return externalState
  }

  React.useEffect(() => {
    console.log(externalState);
  }, [externalState])

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
      {internalState.map(({ type, props, props: { children } }, index) => (
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