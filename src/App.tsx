import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import { ConnectedRouter } from 'connected-react-router';
import Home from 'features/Home/Home';
import TodoList from 'features/TodoList/TodoList';
import { History } from 'history';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.scss';

interface Props {
  history: History;
}

const App = ({ history }: Props) => {
  return (
    <div className='app'>
      <ConnectedRouter history={history}>
        <Header />
        <Main>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/todo-list' component={TodoList} />
            <Redirect to='/' />
          </Switch>
        </Main>
      </ConnectedRouter>
    </div>
  );
};

export default App;
