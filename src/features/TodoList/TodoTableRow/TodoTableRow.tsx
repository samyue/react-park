import { ReactComponent as Trash } from 'assets/trash.svg';
import TodoToggle from 'features/TodoList/TodoToggle/TodoToggle';
import { colorDanger, iconSizeMd } from 'models/styleConstants';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { todoListActions } from 'stores/todoList/actions';
import './TodoTableRow.scss';
interface Props {
  id: string;
  description: string;
  isDone: boolean;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoTableRow = ({ id, description, isDone, toggleTodo, removeTodo }: Props) => {
  const toggleHandler = () => {
    toggleTodo(id);
  };
  return (
    <tr className='todo-table-row'>
      <td
        className={`todo-table-row__col todo-table-row__col--description ${
          isDone ? 'todo-table-row__col--done' : ''
        }`}
        onClick={toggleHandler}
      >
        {description}
      </td>
      <td className='todo-table-row__col todo-table-row__col--actions'>
        <TodoToggle
          className='todo-table-row__action todo-table-row__action--circle'
          isDone={isDone}
          toggleTodo={toggleHandler}
        />

        <Trash
          className='todo-table-row__action todo-table-row__action--trash'
          height={iconSizeMd}
          fill={colorDanger}
          onClick={() => {
            removeTodo(id);
          }}
        />
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleTodo: (id: string) => {
      dispatch(todoListActions.toggleTodo(id));
    },
    removeTodo: (id: string) => {
      dispatch(todoListActions.removeTodo(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(TodoTableRow);
