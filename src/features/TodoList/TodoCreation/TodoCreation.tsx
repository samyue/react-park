import React from 'react'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import './TodoCreation.scss'
interface Props {}

const TodoCreation = ({  }: Props) => {
  return (
    <div className='todo-creation'>
      <InputGroup>
        <Input placeholder='todo description ...' />
        <InputGroupAddon addonType='append'>
          <Button color='primary'>Add</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default TodoCreation
