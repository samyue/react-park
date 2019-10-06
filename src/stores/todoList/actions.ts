import { ActionType, createAction } from 'typesafe-actions';

export enum TodoListActionTypes {
  AddTodo = '[Todo List] Add todo',
  RemoveTodo = '[Todo List] Remove todo',
  toggleTodo = '[Todo List] toggle todo',
}

export const todoListActions = {
  addTodo: createAction(TodoListActionTypes.AddTodo, resolve => {
    return (description: string) => resolve(description);
  }),
  removeTodo: createAction(TodoListActionTypes.RemoveTodo, resolve => {
    return (id: string) => resolve(id);
  }),
  toggleTodo: createAction(TodoListActionTypes.toggleTodo, resolve => {
    return (id: string) => resolve(id);
  }),
};

export type TodoListAction = ActionType<typeof todoListActions>;
