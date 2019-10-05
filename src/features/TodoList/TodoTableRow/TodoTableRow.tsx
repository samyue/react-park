import React from 'react'
import { Button } from 'reactstrap'
import './TodoTableRow.scss'
interface Props {
  description: string
}

const TodoTableRow = ({ description }: Props) => {
  return (
    <tr className='todo-table-row'>
      <td>{description}</td>
      <td className='todo-table-row__actions'>
        <Button color='success' size='sm' className='todo-table-row__button'>
          Done
        </Button>
        <Button color='danger' size='sm' className='todo-table-row__button'>
          Remove
        </Button>
      </td>
    </tr>
  )
}

export default TodoTableRow
