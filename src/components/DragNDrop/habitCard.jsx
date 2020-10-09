import React from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px;
padding: 5px;
margin-bottom: 2px;
background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

function HabitCard(props){
    return (
        <Draggable draggableId={props.habit} index={props.index}>
            {(provided, snapshot) => (
                <Container  
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} 
                 >
                {props.habit}
                </Container>  
            )}
        </Draggable>
    );
}  

export default HabitCard;