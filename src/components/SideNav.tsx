import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../components/SideNav.scss';

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Start with the nav open

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`side-nav ${isOpen ? 'open' : 'closed'}`}>
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {isOpen && <span>Events</span>}
          </NavLink>
          <NavLink to="/my-registrations" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faClipboardList} />
            {isOpen && <span>My Registrations</span>}
          </NavLink>
        </nav>
      </div>
      <FontAwesomeIcon icon={faBars} onClick={toggleNav} className="hamburger-icon" />
    </>
  );
};

export default SideNav;
