import React from 'react';

import HobbyForm from 'components/HobbyForm';
import Sidebar from 'components/Sidebar';
import DragNDrop from 'components/DragNDrop';
import Navbar from 'components/Navbar';
import Calendar from 'components/Calendar';


import './styles.css';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div style={{width: "100%"}}>
      <Sidebar />
      <div style={{width: "85%", float:"right", padding:"20px"}}>
      {/* <HobbyForm /> */}
      <DragNDrop />
      <Calendar />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
