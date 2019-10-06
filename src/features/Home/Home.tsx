import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <article className='home'>
      <p>Welcome to React Park! The React code samples are as follows:</p>
      <ul>
        <li>
          <Link to='/todo-list'>Todo List</Link>
        </li>
      </ul>
    </article>
  );
};

export default Home;
