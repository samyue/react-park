import TodoCreation from 'features/TodoList/TodoCreation/TodoCreation'
import TodoTable from 'features/TodoList/TodoTable/TodoTable'
import React from 'react'
import './TodoList.scss'

const TodoList = () => {
  return (
    <section className='todo-list'>
      <h1>Todo list:</h1>

      <TodoCreation />

      <TodoTable />
    </section>
  )
}

export default TodoList
