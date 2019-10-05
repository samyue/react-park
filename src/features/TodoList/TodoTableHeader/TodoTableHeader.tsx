import React from 'react'
import './TodoTableHeader.scss'

const TodoTableHeader = () => {
  return (
    <thead className='todo-table-header'>
      <tr>
        <th>Description</th>
        <th className='todo-table-header__actions'>Actions</th>
      </tr>
    </thead>
  )
}

export default TodoTableHeader
