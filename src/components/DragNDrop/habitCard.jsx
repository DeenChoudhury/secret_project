import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid lightgrey;
text-align: center;
background-color: #41566a;
color: #41566a;
border-radius: 20px;
padding: 5px;
margin-bottom: 2px;
background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;

function HabitCard(props) {
  const {key, habit, index } = props;
  return (
    <Draggable draggableId={habit} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {habit}
        </Container>
      )}
    </Draggable>
  );
}

export default HabitCard;
