import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px;
padding: 5px;
margin-bottom: 2px;
background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;

function HabitCard(props) {
  const {key, habit, index } = props;
  //TODO: the key is undefined, i have no fucking idea why
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
