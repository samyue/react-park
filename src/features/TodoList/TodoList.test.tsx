import { fireEvent, render } from '@testing-library/react';
import TodoList from 'features/TodoList/TodoList';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { RootAction, RootState } from 'stores';
const history = createBrowserHistory();

describe('<TodoList/>', () => {
  let store: Store<RootState, RootAction>;

  beforeEach(() => {
    // Setup a clean store
    store = configureStore(history);
  });

  it('should add todo item when input is not empty and user clicks Add button', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );
    const todoDescription = 'add more tests';
    const input = getByPlaceholderText(/todo description/i) as HTMLInputElement;
    const addButton = getByTestId('add-button');

    fireEvent.change(input, { target: { value: todoDescription } });
    fireEvent.click(addButton);

    // The todo item with the description should be found
    getByText(todoDescription);

    // The text of input should be cleared
    expect(input.value).toBe('');
  });

  it('should toggle todo item when user clicks the todo list description', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );

    const todoDescription = 'add more tests';
    const input = getByPlaceholderText(/todo description/i) as HTMLInputElement;
    const addButton = getByTestId('add-button');

    fireEvent.change(input, { target: { value: todoDescription } });
    fireEvent.click(addButton);

    const todoItemDesc = getByText(todoDescription);
    expect(todoItemDesc).not.toHaveClass('todo-table-row__col--done');

    fireEvent.click(todoItemDesc);
    expect(todoItemDesc).toHaveClass('todo-table-row__col--done');
  });
});
