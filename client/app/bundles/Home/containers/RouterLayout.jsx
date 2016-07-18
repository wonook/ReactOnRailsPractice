import React from 'react';
import { Link } from 'react-router';

const RouterLayout = ({ children }) => (
  <div className="container">
    <h1>React Router</h1>
    <ul>
      <li><Link to="hello_world">HelloWorld</Link></li>
    </ul>
    <hr/>
    {children}
  </div>
);

export default RouterLayout;