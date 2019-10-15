import { connectRouter, RouterAction, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { TodoListAction } from 'stores/todoList/actions';
import { todoListReducer, TodoListState } from 'stores/todoList/reducer';

export type RootAction = RouterAction | TodoListAction;

export interface RootState {
  router: RouterState;
  todoList: TodoListState;
}

const rootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    todoList: todoListReducer,
  });

// const rootEpic = combineEpics(...todoListEpics);

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

function configureStore(history: History) {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

  const store: Store<RootState, RootAction> = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware)),
  );

  // epicMiddleware.run(rootEpic);
  return store;
}

export default configureStore;
