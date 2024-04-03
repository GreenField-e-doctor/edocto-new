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
import Doctorlist from './components/Doctorlist';
import Doctorcards from './components/Doctorcards';
import BlogList from './components/blogList/BlogList';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from './components/Reviews';
import Categories from './components/Categories';
import DoctorComponent from './components/doctorComponent';
import BookForm from './components/BookForm';
import Doctor from './components/doctor';
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
    
        <Route path="/doctorProfile"  element={<DoctorProfilePage />} />
        <Route path="/bloglist" element={<BlogList />} />
        

        <Route path="/doctorlist" element={<Doctorlist />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/doctorcards" element={<Doctorcards />} />
        <Route path="/doctor" element={<Doctor />} />

        </Routes>
    </div>
  );
}

export default App;
