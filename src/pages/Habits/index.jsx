import React from 'react';
import "./styles.css";
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import HabitHistory from 'components/HabitHistory';


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