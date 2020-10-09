import { Card } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import HabitCard from './habitCard';


const Container = styled.div`
position: relative;
top: 40%;
left: 30%;
margin: 5px;
border: 1px solid lightgrey;
border-radius: 2px;
width: 200px;
`;

const Title = styled.h3`
padding: 8px;
`;

const HabitList = styled.div`
padding: 5px;
`;

function CardColumn(props){
	console.log(props.habits);
    return(
        <Container>
        	<Title>{props.title}</Title>
        		<Droppable droppableId={props.dropId}>
        			{(provided, snapshot) => (
            		<HabitList
            		ref={provided.innerRef}
            		{...provided.droppableProps}
            		>
                {Array.from(props.habits).map((habit, index) => (
                  <HabitCard habit={habit} index={index} />
								))}
                {provided.placeholder}
            </HabitList>
        )}
        		</Droppable>
        </Container>
    );
}

export default CardColumn;