import { fireEvent, render } from '@testing-library/react';
import TodoList from 'features/TodoList/TodoList';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'stores';
const history = createBrowserHistory();
const store = configureStore(history);

describe('<TodoList/>', () => {
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

    getByText(todoDescription);
    expect(input.value).toBe('');
  });
});
