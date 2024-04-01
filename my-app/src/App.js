import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Book from "./components/Book"
import ContactUs from "./components/contact us/ContactUs"
import Login from './components/Login';
import DoctorProfilePage from './components/DoctorProfile/DoctorProfilePage';
import './App.css';
import Admin from './components/Admin';
import Chat from './components/chat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/service" element={<Book />} />  
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/doctor"  element={<DoctorProfilePage />} />
        </Routes>
    </div>
  );
}

export default App;
