// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Book Page</Link>
        </li>
        <li>
          <Link to="/categories">Category</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
