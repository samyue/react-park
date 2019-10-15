import { fireEvent, getByTestId, render } from '@testing-library/react';
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

  it('should toggle todo item when user clicks the todo list description or toggle icon', () => {
    const { getByPlaceholderText, getByText, getByTestId: getByTestIdFromRoot } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );

    const todoDescription = 'add more tests';
    const input = getByPlaceholderText(/todo description/i) as HTMLInputElement;
    const addButton = getByTestIdFromRoot('add-button');

    fireEvent.change(input, { target: { value: todoDescription } });
    fireEvent.click(addButton);

    const todoItemDesc = getByText(todoDescription);
    expect(todoItemDesc).not.toHaveClass('todo-table-row__col--done');

    fireEvent.click(todoItemDesc);
    expect(todoItemDesc).toHaveClass('todo-table-row__col--done');

    const todoItem = todoItemDesc.parentElement as HTMLElement;
    const checkedCircleToggle = getByTestId(todoItem, 'checked-circle');

    fireEvent.click(checkedCircleToggle);
    expect(todoItemDesc).not.toHaveClass('todo-table-row__col--done');

    const uncheckedCircleToggle = getByTestId(todoItem, 'unchecked-circle');
    fireEvent.click(uncheckedCircleToggle);
    expect(todoItemDesc).toHaveClass('todo-table-row__col--done');
  });

  it('should remove todo item when user clicks trash icon', () => {
    const { getByPlaceholderText, getByText, getByTestId: getByTestIdFromRoot } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );

    const input = getByPlaceholderText(/todo description/i) as HTMLInputElement;
    const addButton = getByTestIdFromRoot('add-button');
    const tableBody = getByTestIdFromRoot('todo-table-body');

    fireEvent.change(input, { target: { value: 'add test 1' } });
    fireEvent.click(addButton);
    expect(tableBody.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: 'add test 2' } });
    fireEvent.click(addButton);
    expect(tableBody.childElementCount).toBe(2);

    const item1 = getByText('add test 1').parentElement as HTMLElement;
    const trash1 = getByTestId(item1, 'trash');
    fireEvent.click(trash1);
    expect(tableBody.childElementCount).toBe(1);

    const item2 = getByText('add test 2').parentElement as HTMLElement;
    const trash2 = getByTestId(item2, 'trash');
    fireEvent.click(trash2);
    expect(tableBody.childElementCount).toBe(0);
  });
});
