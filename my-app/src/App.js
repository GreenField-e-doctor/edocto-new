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
import OneBlog from './components/blog';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from './components/Reviews';
function App() {
  return (
    <div className="App">
      <OneBlog/>
      {/* <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/service" element={<Book />} />  
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/chat" element={<Chat />} />
        </Routes>
        <Route path="/doctor"  element={<DoctorProfilePage />} />
        <Route path="/reviews" element={<Reviews />} />
        </Routes> */}
    </div>
  );
}

export default App;
