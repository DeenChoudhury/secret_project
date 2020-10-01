<<<<<<< Updated upstream:src/components/sidebar/Sidebar.jsx
import React from "react";
<<<<<<< HEAD:src/components/Sidebar/index.jsx
import './styles.css';
=======
import './sidebar.css';
=======
import React, {useState} from 'react';
import './styles.css';
>>>>>>> Stashed changes:src/components/Sidebar/index.jsx
>>>>>>> trying to link get request in sidebar:src/components/sidebar/Sidebar.jsx
import { Link } from 'react-router-dom';
import HobbyForm from '../HobbyForm';
import axios from 'axios';
import {getTest} from '../../api/index';

function Sidebar() {
    // const [habits, setHabit] = useState([]);

    function componentDidMount(){
        let x = getTest();
        console.log(x);
    };

    // function getHabit() {
    //     axios({
	// 		url:'http://localhost:3001/user',
	// 		method: 'GET',
	// 	})
    //     .then((response) => {
    //         const data = response.data;
    //         setHabit = habits.push(data)
    //         console.log(habits);
    //         console.log('Data has been received');
    //     })
    //     .catch(() => {
    //     console.log('Some server error');
    //     })
	// };
    //         .then((response)=>{
    //             const data = response.data;
    //             setHabit = habits.push(data)
    //             console.log(habits);
    //             console.log('Data has been received');
    //         })
    //         .catch(()=>{
    //             console.log('Error, data not received');
    //         })
    // // };

    // function displayHabits(habits){
    //     if (!habits.length) return null;

    //     return habits.map((habit, index) => (
    //         <div key={index}>
    //             <li class="nav-item"></li>
    //             <a class="nav-link" href="#">
    //                 {habit.title}
    //             </a>
    //         </div>
    //     ))
    // };

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