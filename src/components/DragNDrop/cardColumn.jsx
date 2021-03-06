import styled from 'styled-components';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import HabitCard from './habitCard';

const Container = styled.div`
position: relative;
top: 20%;
left: 20%;
margin-left: 2px;
margin-right: 0px;
border: 1px solid lightgrey;
border-radius: 2px;
width: 150px;
flex-grow: 1;
min-height: 100px;
`;

const Title = styled.h4`
padding: 5px;
`;

const HabitList = styled.div`
padding: 3px;
`;

function CardColumn(props) {
  const { title, dropId, habits} = props;
  console.log(habits);
  return (
    <Container>
      <Title>{title}</Title>
      <Droppable droppableId={dropId}>
        {(provided) => (
          <HabitList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {Array.from(habits).map((habit, index) => (
              <HabitCard key={habit.habit_name} habit={habit.habit_name} index={index} />))}
            {provided.placeholder}
          </HabitList>
        )}
      </Droppable>
    </Container>
  );
}

export default CardColumn;
