import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import Rating from 'react-rating-stars-component';
import { Modal, Button, Form } from 'react-bootstrap';
import profileImage from './image_16.png'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import './DoctorProfile.css';
import Reviews from '../Reviews';
// import PostBlog from './PostBlog'
import Navbar from '../Navbar';
import Footer from '../footer/Footer';

const DoctorProfilePage = () => {




  const [doctorData, setDoctorData] = useState({
    name: "Dr. Zven Den",
    specialty: "Cardiology",
    imageUrl: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    ratings: 4.2,
    reviews: [
      { author: "Jane Smith", comment: "Very thorough and kind.", rating: 5 },
      { author: "Doe John", comment: "Helpful and informative.", rating: 4 },
    ],
    appointments : [
      { name: "Alice Wonderland", date: "2024-04-15, 10:00 AM", description: "Routine check-up", rating: 4 },
      { name: "Charlie Bucket", date: "2024-04-16, 11:00 AM", description: "Consultation", rating: 5 },
    ]
   
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isReview, setIsReview] = useState(false);

  

  useEffect(() => {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    console.log(user);
    user.appointments = [
      { name: "Alice Wonderland", date: "2024-04-15, 10:00 AM", description: "Routine check-up", rating: 4 },
      { name: "Charlie Bucket", date: "2024-04-16, 11:00 AM", description: "Consultation", rating: 5 },
    ]
    console.log('fixed',user);
    setDoctorData(user);
  }, [, searchQuery, showPasswordModal, showProfileModal, isReview])
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowPasswordModal = () => setShowPasswordModal(true);
  const handleClosePasswordModal = () => setShowPasswordModal(false);
  const handleShowProfileModal = () => setShowProfileModal(true);
  const handleCloseProfileModal = () => setShowProfileModal(false);

  return ( <div>
    <Navbar />
    <div className="doctor-profile-container my-5">
      <img src={profileImage} alt="Profile" className="doctor-profile-picture" />
      <div className="row">
        <div className="col-md-3">
          <DoctorInfo
            name={doctorData.FirstName+" "+doctorData.LastName}
            specialty='dental Care'
            picture={doctorData.imageUrl}
            ratings={doctorData.ratings}
          />
        </div>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search appointments..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <a className="nav-link" onClick={handleShowProfileModal}>My Profile</a>
            </li>
            <li className="nav-item">
              <Button variant="primary" onClick={handleShowPasswordModal}>Change Password</Button>
              <Button variant="primary" onClick={()=>setIsReview(false)}>Appointments</Button>
            </li>
            <li className="nav-item">
          <button onClick={() => navigate('/postblog')} className="btn btn-primary">Post Blog</button>
        </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate('/notifications')}>Notifications</a>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={()=>setIsReview(true)}>Reviews</button>
            </li>
          </ul>
          <div className="mt-4">
            <h5>Filtered Appointments</h5>
            { isReview ? <Reviews/>: doctorData && doctorData.appointments.filter(appointment => appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) || appointment.description.toLowerCase().includes(searchQuery.toLowerCase())).map((appointment, index) => (
              <div key={index} className="doctor-profile-card card mb-3">
                <div className="card-body ">
                  <h5 className="card-title">{appointment.name}</h5>
                  <p className="card-text">{appointment.description}</p>
                  <p className="card-text"><small className="text-muted">{appointment.date}</small></p>
                  <Rating value={appointment.rating} edit={false} size={24} activeColor="#007E85" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={showPasswordModal} onHide={handleClosePasswordModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="new-password">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group controlId="confirm-new-password">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePasswordModal}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showProfileModal} onHide={handleCloseProfileModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Doctor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DoctorInfo
            name={doctorData.FirstName + " " + doctorData.LastName}
            specialty='dental Care'
            picture={doctorData.imageUrl}
            ratings={doctorData.ratings}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfileModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <Footer/>
    </div>
  );
};

export default DoctorProfilePage;
