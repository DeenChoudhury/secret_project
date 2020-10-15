import React, {
  useState, useEffect, useCallback,
} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import CardColumn from './cardColumn';
import { getHabits } from '../../api';

function DragNDrop() {
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    getHabits().then((res) => {
      setTodoList(res);
    });
  }, []);

  const onDragEnd = useCallback((result) => {
    if (!(result.destination.droppableId === result.source.droppableId)) {
      if (result.source.droppableId === 'droppable-0') {
        const tdRemoved = todoList.splice([result.source.index], 1);
        setTodoList(todoList);
        setCompletedList(completedList.concat(tdRemoved));
      } else {
        const clRemoved = completedList.splice([result.source.index], 1);
        setCompletedList(completedList);
        setTodoList(todoList.concat(clRemoved));
      }
    }
  });

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div style={{ display: 'flex', flexDirection: 'row', width: '45%' }}>
        <div style={{ marginTop: '50px', width: '25%', marginLeft: '230px' }}>
          <CardColumn title="1% Better" dropId="droppable-0" habits={todoList} />
        </div>
        <div style={{ marginTop: '50px', width: '25%' }}>
          <CardColumn title="Completed" dropId="droppable-1" habits={completedList} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default DragNDrop;
