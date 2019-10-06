import { createSelector } from 'reselect';
import { RootState } from '../';

export const getTodoListState = (state: RootState) => state.todoList;
export const getTodoList = createSelector(
  getTodoListState,
  todoListState => todoListState.todoList,
);
