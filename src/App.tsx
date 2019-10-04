import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import TodoList from 'features/TodoList/TodoList'
import React from 'react'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Main>
        <TodoList />
      </Main>
    </div>
  )
}

export default App
