import React from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';


function HabitCard(){
    return (
        <Draggable draggableId="drag1" index={0}>
            {(provided, snapshot) => (
                <div 
                className='mdc-card mdc-card--outlined' 
                style={{width:"100px"}}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} 
                 >
                <h1>Hello</h1>
                </div>  
            )}
        </Draggable>
    )
}  

export default HabitCard;