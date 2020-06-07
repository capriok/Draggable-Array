import * as React from 'react'
import { useState, useEffect } from 'react'
import styles from './styles.module.css'
const DraggableArray: React.FC<props> = ({ children }) => {
  const childArr: any[] = []
  React.Children.forEach(children, (child?: any) => childArr.push(child))
  const [arr, setArr] = useState<any[]>(childArr)
  const [dragging, isDragging] = useState<boolean>(true)
  const [draggedItem, setDraggedItem] = useState<[]>()
  const [draggedOverItem, setDraggedOverItem] = useState<[]>()

  const onDragStart = (
    e:
      any |
      React.DragEvent<HTMLInputElement> |
      React.DragEvent<HTMLDivElement>,
    index:
      number
  ): void => {
    isDragging(true)
    setDraggedItem(arr[index])
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 40, 35)
  }

  const onDragOver = (
    index?:
      number |
      any
  ): void => {
    setDraggedOverItem(arr[index])
    if (draggedItem === draggedOverItem) {
      return
    }
    let newArr = arr.filter((item: []) => {
      return item !== draggedItem
    })
    newArr.splice(index, 0, draggedItem)
    setArr(newArr)
  }

  const onDragEnd = (): void => {
    console.log('end');

    isDragging(false)
  }

  useEffect(() => {
    !dragging && console.log(arr);
  }, [dragging])

  return (
    <div className={styles.main}>
      <React.Fragment>
        {arr.map(({ type, props, props: { children } }, idx) => (
          <li
            className={styles.wrapper}
            draggable={true}>
            <div
              className={props.className}
              style={children ? { ...props.style } : {}}
              draggable={true}
              onDragStart={e => onDragStart(e, idx)}
              onDragOver={() => onDragOver(idx)}
              onDragEnd={() => onDragEnd()}>
              {children && typeof children !== 'string'
                ? React.Children.map(
                  children,
                  child => (
                    React.cloneElement(
                      child,
                      {}
                    )
                  ))
                : React.createElement(
                  type,
                  props,
                  (typeof children !== 'object') ? children : children.item
                )
              }
            </div>
          </li>
        ))}
      </React.Fragment>
    </div>
  )
}

export default DraggableArray