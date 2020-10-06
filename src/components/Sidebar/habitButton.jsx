import React, {useState, useEffect, Component} from 'react';

function HabitButton(props){
    return(<li class="nav-item">
              <a class="nav-link" href="#">
                {props.username}
                {props.children}
              </a>
            </li>)
}

export default HabitButton;