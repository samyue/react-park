import TodoTableHeader from 'features/TodoList/TodoTableHeader/TodoTableHeader';
import TodoTableRow from 'features/TodoList/TodoTableRow/TodoTableRow';
import { Todo } from 'models/todoList';
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { RootState } from 'stores';
import { getTodoList } from 'stores/todoList/selectors';
import './TodoTable.scss';
interface Props {
  todoList: Todo[];
}

const TodoTable = ({ todoList }: Props) => {
  return (
    <Table className='todo-table' hover striped borderless>
      <TodoTableHeader />
      <tbody>
        {todoList.map(item => {
          return (
            <TodoTableRow
              id={item.id}
              description={item.description}
              isDone={item.isDone}
            ></TodoTableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    todoList: getTodoList(state),
  };
};

export default connect(mapStateToProps)(TodoTable);