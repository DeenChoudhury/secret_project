import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import initialData from './initialData';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { useCallback } from 'react';
import HabitCard from './habitCard';
import CardColumn from './cardColumn';

function DragNDrop(){

    const onDragEnd = useCallback(() => {
        console.log("Stopped Dragging");
    }, []);

    const [columnData, setInitialData] = useState(initialData);

    return(
        <DragDropContext 
        onDragEnd={onDragEnd}
        >
            <CardColumn/>
        </DragDropContext>
        
    )
};

export default DragNDrop;