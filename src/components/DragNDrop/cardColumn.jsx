import { Card } from '@material-ui/core';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import HabitCard from './habitCard';

function CardColumn(){
    return(
        <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
            <div 
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            {...provided.droppableProps}
            >
                <div>
                    <HabitCard/>
                </div>
            </div>
        )};

        </Droppable>


    )
}

export default CardColumn;