import TodoTableHeader from 'features/TodoList/TodoTableHeader/TodoTableHeader'
import TodoTableRow from 'features/TodoList/TodoTableRow/TodoTableRow'
import React from 'react'
import { Table } from 'reactstrap'
import './TodoTable.scss'
interface Props {}

const TodoTable = ({  }: Props) => {
  return (
    <Table className='todo-table' hover striped borderless>
      <TodoTableHeader />
      <tbody>
        <TodoTableRow description={'test 1'}></TodoTableRow>
        <TodoTableRow description={'test 2'}></TodoTableRow>
        <TodoTableRow description={'test 3'}></TodoTableRow>
        <TodoTableRow description={'test 4'}></TodoTableRow>
        <TodoTableRow description={'test 5'}></TodoTableRow>
      </tbody>
    </Table>
  )
}

export default TodoTable
