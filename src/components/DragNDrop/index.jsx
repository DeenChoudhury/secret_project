import React, { Component } from 'react';
import initialData from './initialData';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { useCallback } from 'react';
import CardColumn from './cardColumn';

function DragNDrop(){

	const [columnData, setInitialData] = useState(initialData);
	const [todoList, setTodoList] = useState(['Run', 'Read', 'Sleep']);
	const [completedList, setCompletedList] = useState(["Jump someone"]);
	console.log("completedList " + completedList);

	const onDragEnd = useCallback(result => {
		if(!(result.destination.droppableId === result.source.droppableId)){
			if(result.source.droppableId === "droppable-0"){
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

	return(
			<DragDropContext
			onDragEnd={onDragEnd}
			>
				<div style={{marginTop: '50px'}}>
					<CardColumn title={'1% Better'} dropId={"droppable-0"} habits={todoList}/>
				</div>
				<div>
					<CardColumn title={'Completed'} dropId={"droppable-1"} habits={completedList}/>
				</div>
			</DragDropContext>
	)
};

export default DragNDrop;