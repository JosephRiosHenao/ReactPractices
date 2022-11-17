import React from 'react'

const TodoItem = (props) => {
  return (
    <>
        <li className={`not-completed ${props.completed && 'completed'}`}>
            <span>{ props.text }</span>
            <button className='delete-todo'>X</button>
        </li>
    </>
  )
}

export default TodoItem