
import React, {useState, useEffect} from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import HobbyForm from '../HobbyForm';
import {getTest} from '../../api/index';
import HabitButton from './habitButton';

function Sidebar() {
    const [habits, setHabit] = useState([]);
    
    useEffect(() => {
        getTest().then((res)=>{
            setHabit(res)
        });
    }, []);

    function echoUsers(users){
        return users.map((user) => {
            return (
            <HabitButton 
            username={user.first_name} 
            >
            <div>Hello</div>
            </HabitButton>
            )
        });   
    };

    return (
        <nav id="sidebarMenu" class="sidebar">
            <div class="sidebar-menu">
                <ul class="nav flex-column">
                    <li class="first-nav-item"></li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Products
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Customers
                         </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Reports
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Integrations
                        </a>
                    </li>
                    {echoUsers(habits)}
                </ul>

            <h6 class="sidebar-title2">
                <span>Saved reports</span>
                <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                </a>
            </h6>
            </div>
        </nav>
    )
};



export default Sidebar;