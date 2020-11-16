import React, { useState, useEffect } from 'react';
import {getHabitHistory} from 'api';

function HabitHistory() {
  const [habitHistory, setHabitHistory] = useState('');
  
  const queryString = window.location.pathname;

  useEffect(() => {
      getHabitHistory(queryString).then((res)=> {
          setHabitHistory(res[0])
      });
  }, []);

  return (
    <h1>{habitHistory.habit_name}</h1>
  )
};



export default HabitHistory;