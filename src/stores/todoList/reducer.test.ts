import { TodoListAction, todoListActions } from 'stores/todoList/actions';
import { initialState, todoListReducer } from 'stores/todoList/reducer';
describe('todoListReducer', () => {
  it('should return the initial state', () => {
    expect(todoListReducer(undefined, {} as TodoListAction)).toEqual({ todoList: [] });
  });

  it('should handle AddTodo', () => {
    expect(
      todoListReducer(initialState, todoListActions.addTodo('write a test for my todo list app')),
    ).toMatchObject({
      todoList: [
        {
          description: 'write a test for my todo list app',
          isDone: false,
        },
      ],
    });
  });

  it('should handle RemoveTodo', () => {
    expect(
      todoListReducer(
        {
          todoList: [
            {
              id: '1',
              description: 'write a test for reducer',
              isDone: true,
            },
          ],
        },
        todoListActions.removeTodo('1'),
      ),
    ).toMatchObject({
      todoList: [],
    });
  });

  it('should handle ToggleTodo', () => {
    expect(
      todoListReducer(
        {
          todoList: [
            {
              id: '1',
              description: 'write a test for reducer',
              isDone: true,
            },
          ],
        },
        todoListActions.toggleTodo('1'),
      ),
    ).toMatchObject({
      todoList: [
        {
          id: '1',
          description: 'write a test for reducer',
          isDone: false,
        },
      ],
    });

    expect(
      todoListReducer(
        {
          todoList: [
            {
              id: '1',
              description: 'write a test for reducer',
              isDone: false,
            },
          ],
        },
        todoListActions.toggleTodo('1'),
      ),
    ).toMatchObject({
      todoList: [
        {
          id: '1',
          description: 'write a test for reducer',
          isDone: true,
        },
      ],
    });
  });
});
