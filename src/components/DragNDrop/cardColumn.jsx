import styled from 'styled-components';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import HabitCard from './habitCard';

const Container = styled.div`
position: relative;
margin-left: 20px;
margin-right: 0px;
border: 1px solid #3296c8;
border-radius: 10px;
width: 200px;
flex-grow: 1;
min-height: 100px;
`;

const Title = styled.h4`
text-align: center;
padding: 5px;
`;

const HabitList = styled.div`
padding: 2px;
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
