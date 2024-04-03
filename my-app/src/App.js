import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Book from "./components/Book"
import ContactUs from "./components/contact us/ContactUs"
import Login from './components/Login';
import DoctorProfilePage from './components/DoctorProfile/DoctorProfilePage';
import PaymentSuccess from './components/PaymentSuccess';
// import './App.css';
import Admin from './components/Admin';
import Chat from './components/chat';
// import Doctorlist from './components/Doctorlist';
// import Doctorcards from './components/Doctorcards';
import BlogList from './components/blogList/BlogList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Reviews from './components/Reviews';
import PostBlog from './components/DoctorProfile/PostBlog';
import PharmacyPage from './components/Pharmacy/PharmacyPage';
import ProductList from './components/Pharmacy/ProductList';
import ProductCart from './components/Pharmacy/ProductCart';
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
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/postblog" element={<PostBlog />} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/pharmacy/:category" element={<ProductList />} />
        <Route path="/productcart" element={<ProductCart />} />


        </Routes>
    </div>
  );
}

export default App;
