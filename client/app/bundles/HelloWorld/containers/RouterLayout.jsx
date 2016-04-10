import React from 'react';
import { Link } from 'react-router';

const RouterLayout = ({ children }) => (
  <div className="container">
    <h1>React Router</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/hello_world_app">HelloWorld</Link></li>
      <li><Link to="/todo_app">Todo</Link></li>
    </ul>
    <hr/>
    {children}
  </div>
);

export default RouterLayout;