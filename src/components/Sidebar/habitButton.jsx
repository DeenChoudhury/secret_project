import React from 'react';
import './styles.css';

function HabitButton(props) {
  const { username, children } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href={`/habits/${children}`}>
        {username}
      </a>
    </li>
  );
}

export default HabitButton;
