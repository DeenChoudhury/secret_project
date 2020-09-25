import React from "react";
import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav id="sidebarMenu" class="sidebar">
            <div class="sidebar-menu">
                <ul class="nav flex-column">
                    <li class="first-nav-item"></li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Orders
                        </a>
                    </li>
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