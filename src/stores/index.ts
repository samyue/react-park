import { connectRouter, RouterAction, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

export type RootAction = RouterAction;

export interface RootState {
  router: RouterState;
}

const rootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),
  });

// const rootEpic = combineEpics(...todoListEpics);

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

function configureStore(history: History) {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

  const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware)),
  );

  // epicMiddleware.run(rootEpic);
  return store;
}

export default configureStore;
