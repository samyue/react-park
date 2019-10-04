import React from 'react'
import { Button } from 'reactstrap'
import './TodoList.scss'

const TodoList = () => {
  return (
    <section className='todo-list'>
      <h1>Todo list:</h1>
      <input type='text' />
      <Button>Add todo</Button>
    </section>
  )
}

export default TodoList
