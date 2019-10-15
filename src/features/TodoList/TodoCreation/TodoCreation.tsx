import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { Dispatch } from 'redux';
import { RootAction } from 'stores';
import { todoListActions } from 'stores/todoList/actions';
import './TodoCreation.scss';

interface Props {
  addTodo: (description: string) => void;
}

const TodoCreation = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='todo-creation'>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!inputRef.current || !inputRef.current.value.trim()) {
            return;
          }
          props.addTodo(inputRef.current.value);
          inputRef.current.value = '';
        }}
      >
        <InputGroup>
          <Input placeholder='todo description ...' innerRef={inputRef} data-testid='todo-input' />
          <InputGroupAddon addonType='append'>
            <Button color='primary' data-testid='add-button'>
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    addTodo: (description: string) => {
      dispatch(todoListActions.addTodo(description));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TodoCreation);
