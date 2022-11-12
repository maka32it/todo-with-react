import React from 'react'

export default function Todo({todo,removeTask,toggleTask}) {
    function handleClick(){
        removeTask(todo.id)
    }
    function handleToggle(){
        toggleTask(todo.id)
    }
  return (
    <div className='item-todo'>
      <div
       className={todo.complete 
       ? "item-text strike" 
       : "item-text"}
       onClick={handleToggle}
       >
        {todo.text}
      </div>
      <div className='item-delete' onClick={handleClick}>
        Delete
      </div>
    </div>
  )
}
