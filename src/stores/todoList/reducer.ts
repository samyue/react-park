import { Todo } from 'models/todoList';
import { TodoListAction, todoListActions } from 'stores/todoList/actions';
import { getType } from 'typesafe-actions';
import uuid from 'uuid/v4';

export interface TodoListState {
  todoList: Todo[];
}

const initialState: TodoListState = {
  todoList: [],
};

export function todoListReducer(
  state: TodoListState = initialState,
  action: TodoListAction,
): TodoListState {
  switch (action.type) {
    case getType(todoListActions.addTodo):
      return {
        ...state,
        todoList: [...state.todoList, { id: uuid(), description: action.payload, isDone: false }],
      };
    case getType(todoListActions.removeTodo):
      return {
        ...state,
        todoList: state.todoList.filter(item => {
          return item.id !== action.payload;
        }),
      };
    case getType(todoListActions.toggleTodo):
      return {
        ...state,
        todoList: state.todoList.map(item => {
          return item.id === action.payload ? { ...item, isDone: !item.isDone } : item;
        }),
      };
    default:
      return state;
  }
}
