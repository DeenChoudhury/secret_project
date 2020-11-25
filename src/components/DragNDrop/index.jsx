import React, {
  useState, useEffect, useCallback,
} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import CardColumn from './cardColumn';
import { getTracker, postTracker } from '../../api';
import moment from 'moment';

function DragNDrop() {
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    getTracker().then((res) => {
      console.log('res', res);
      const filteredToDo = res.filter(habit => !habit.done);
      const filteredCompleted = res.filter(habit => habit.done);
      
      setTodoList(filteredToDo);
      setCompletedList(filteredCompleted);
    });
  }, todoList);

  const onDragEnd = ((result) => {
    console.log('result', result);
    const start = result.source.droppableId;
    const finish = result.destination?.droppableId || start;

    if (!(start === finish)) {
      if (start === 'droppable-0') {
        const tdRemoved = todoList.splice([result.source.index], 1);
        console.log("tdRemoved" + JSON.stringify(tdRemoved));
        setTodoList(todoList);
        setCompletedList(completedList.concat(tdRemoved));
        postTracker(tdRemoved[0]);

      } else if (start === 'droppable-1') {
        const clRemoved = completedList.splice([result.source.index], 1);
        setCompletedList(completedList);
        setTodoList(todoList.concat(clRemoved));
        postTracker(clRemoved[0]);
      } else {
        setTodoList(todoList);
        setCompletedList(completedList);
      }
    } 
    return;
  });

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div style={{ display: 'flex', flexDirection: 'row', width: '45%', marginLeft: '10%'}}>
        <div style={{ marginTop: '50px', width: '25%'}}>
          <CardColumn title="1% Better" dropId="droppable-0" habits={todoList} />
        </div>
        <div style={{ marginTop: '50px', width: '25%', marginLeft: '100px' }}>
          <CardColumn title="Completed" dropId="droppable-1" habits={completedList} /> 
        </div>
      </div>
    </DragDropContext>
  );
}

export default DragNDrop;
