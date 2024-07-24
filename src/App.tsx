import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventListPage from './pages/EventListPage';
import EventRegistrationPage from './pages/EventRegistrationPage';
import RegistrationConfirmationPage from './pages/RegistrationConfirmationPage';
import MyRegistrationsPage from './pages/MyRegistrationsPage';
import SideNav from './components/SideNav';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <SideNav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<EventListPage />} />
            <Route path="/register/:eventId" element={<EventRegistrationPage />} />
            <Route path="/confirmation" element={<RegistrationConfirmationPage />} />
            <Route path="/my-registrations" element={<MyRegistrationsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
