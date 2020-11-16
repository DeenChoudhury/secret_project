import React from 'react';

import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import HabitHistory from 'components/HabitHistory';

import './styles.css';

function HabitsPage() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <HabitHistory />
    </div>
  );
}

export default HabitsPage;