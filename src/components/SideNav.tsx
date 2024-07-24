import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/SideNav.scss';

const SideNav: React.FC = () => {
  return (
    <div className="side-nav">
      <h2>Dashboard</h2>
      <nav className="navbar">
        <div>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Events
        </NavLink>
        </div>
        <div>
        <NavLink to="/my-registrations" className={({ isActive }) => (isActive ? 'active' : '')}>
          My Registrations
        </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default SideNav;
