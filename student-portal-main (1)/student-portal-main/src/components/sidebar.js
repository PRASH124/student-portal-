// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

function Sidebar({ isVisible }) {
  return (
    <aside className={`sidebar ${isVisible ? '' : 'hidden'}`}>
      <ul>
        <li className='sidebar_items'><Link to="/dashboard">Dashboard</Link></li>
        <li className='sidebar_items'><Link to="/courses">Courses</Link></li>
        <li className='sidebar_items'><Link to="/aboutus">About Us</Link></li>
        <li className='sidebar_items'><Link to="/hostel">Hostel</Link></li>
        <li className='sidebar_items'><Link to="/attendance">Attendance</Link></li>
        <li className='sidebar_items'><Link to="/instcontacts">Contacts</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
