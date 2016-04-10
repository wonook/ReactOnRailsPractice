import React from 'react';
import { Link } from 'react-router';

const RouterLayout = ({ children }) => (
  <div className="container">
    <h1>React Router</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="helloworld">HelloWorld</Link></li>
    </ul>
    <hr/>
    {children}
  </div>
);

export default RouterLayout;