import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './redux/actions/authactions';
import '../css/login.css';
import Navbar from './Navbar';

const Login = ({ login, error }) => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const HandleSubmit = async (e) => {


      e.preventDefault();
      login(Email, Password);
      if(!error){
        if(Email === "admin@healthcare.com") navigate('/admin')
        if(localStorage.getItem("userType")==='Doctor') {navigate('/doctor')}
        if(localStorage.getItem("userType")==='Patient') {navigate('/')}
        // if(localStorage.getItem("token")) {navigate('/')}
        
        
      }
    
  };

  return (
    <div className='frmm'>
      <Navbar />
      <form onSubmit={HandleSubmit}>
        <h2 style={{color:'#007e85'}}>Login</h2>
        <div className="container">
          <div className="">
            <img
              src="https://th.bing.com/th/id/OIP.czYUxy7G0x5DDRsqs9xq0QHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Doctor"
              style={{ marginBottom: '20px', borderRadius: '20%', marginTop: '20px', background: 'transparent',  }}
            />
          </div>
          <div className="form"></div>
          <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (Email, Password) => dispatch(login(Email, Password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
