import React, { useState } from "react";
import styled from "styled-components";
import ServicesPage from "./ServicesPage";
import Footer from "./footer/Footer";
import Navbar from "./Navbar";
import Rates from "./Rates";
import axios from "axios";
import { useDispatch } from "react-redux";
import { sendAppointmentEmail } from "./redux/actions/emailActions";
import { useNavigate } from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import FaqPage from "./FaqPage";
import { json } from "react-router-dom";

const Container = styled.div`
  background-image: url("https://s3-alpha-sig.figma.com/img/29a1/83e9/4cfaa1c70f9923b9dff53e831733a031?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BPb4iKFpTXsTfzPGJ1UT0k7s5GcYe70I9fmj0E1ha539XGmpRHJu50Wxv-Ecscl~VMqej~MTo8vlyDFUK0mfVD~RWIgy~uZAN8IMAemXPEjBmAQgQgxhlS4fde5YX5sxmc1HtdTeuAgdENZlQ3JbUxf-KHsF~r-Yi1oUl2vWrP-AZ1oPGCEqE3CFh9BGRVCXIphLDTM1WZMDTINSU2AtNJmDCxx4kpF4qeN7w7UyPJSPKq-S6sVwn494l~ftSFtuvPcw4-XeDl-mGOFpjjfo2VCSX1ANAjQh-JuLPsKK97j3All0emM03tnmferVVu3JSWd1tCJetOVk0qUSTr6~pQ__");
  background-size: cover;
  background-position: center;
  display: flex;
  height: 650px; /* Updated height */
`;

const Content = styled.div`
  margin-left: 150px;
  margin-top: 200px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  margin-bottom: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px; /* Increase padding to make the button bigger */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto; /* Center the button horizontally */
  display: block; /* Ensure the button takes up the full width */
`;

function BookApp() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [time, setTime] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dateTemplate = (date) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <strong style={{ textDecoration: "line-through" }}>{date.day}</strong>
      );
    }
    return date.day;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleDateChange = (e) => {
    console.log("Selected date:", e.$d);
    if (e.$d) {
      setDate(e.$d);
    }
    function extractDatePart(dateString) {
      // Create a Date object from the provided string
      const date = new Date(dateString);

      // Extract month, date, and year from the Date object
      const month = date.toLocaleString("en-us", { month: "short" });
      const day = date.getDate();
      const year = date.getFullYear();

      // Construct the desired date format
      const formattedDate = `${month} ${day} ${year}`;

      return formattedDate;
    }
    const extractedDate = extractDatePart(e.$d);
    setDate(extractedDate);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleSubmit = async (e) => {
    try {
        
    e.preventDefault();
     setUserId(localStorage.getItem("userId"))
  
    axios.post("http://localhost:3000/api/Appointment", {
      AppointmentTime: date,
      Department: department,
      UserId: localStorage.getItem("userId"),
    });
    dispatch(sendAppointmentEmail(email, name, date, time, department));
    const successMessage = document.createElement("div");
    successMessage.textContent = "Your booking has been successful!";
    successMessage.style.backgroundColor = "green";
    successMessage.style.color = "white";
    successMessage.style.padding = "10px";
    successMessage.style.borderRadius = "5px";
    successMessage.style.position = "fixed";
    successMessage.style.top = "50%";
    successMessage.style.left = "50%";
    successMessage.style.transform = "translate(-50%, -50%)";
    successMessage.style.zIndex = "9999";
    document.body.appendChild(successMessage);
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
}  catch (error) {
        console.log(error.response.data.error);
    }
  };

  let Department = [
    "Surgery",
    "Cardiology",
    "Dental Care",
    "Orthopedics",
    "Eye Care",
    "Diagnosis",
  ];

  return (
    <div>
      <Navbar />
      <Container>
        <Content>
          <h1 fontSize={35}>Meet The Best Hospital</h1>
          <h4>We know how large objects will act ,</h4>
          <h4>but things on a small scale.</h4>
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "#007E85",
              color: "white",
              padding: "0px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "30px",
              marginRight: "30px",
              fontSize: "16px",
           
            }}
          >
            Get Quote
          </button>
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "transparent",
              color: "white",
              padding: "0px",
              border: "1px solid #007E85",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            Learn More
          </button>
          <button
            style={{
              fontWeight: "bold",
              backgroundColor: "#007E85",
              color: "white",
              padding: "0px",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              marginTop: "30px",
              marginRight: "30px",
              marginLeft: "30px",
              fontSize: "16px",
            }}
            onClick={() => navigate("/chat")}
          >
            Connect With a doctor 
          </button>
        </Content>

        <Form
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "350px",
            margin: "auto",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Book an Appointment
          </h1>
          <h2 style={{ fontSize: "16px", color: "#6c757d", marginTop:'20px'}}>
            Fill the Form Please.
          </h2>
          <Input
            type="text"
            placeholder="Name"
            style={{
              marginBottom: "10px",
              marginLeft: "90px",
              marginTop: "20px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
              fontFamily: "Arial",
              fontSize: "11px",

            }}
            value={name}
            onChange={handleNameChange}
          />
          <br />

          <Input
            type="email"
            placeholder="Email"
            style={{
              marginBottom: "10px",
            marginLeft: "90px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <Input
            type="text"
            placeholder="Address"
            style={{
              marginBottom: "10px",
            marginLeft: "90px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
            value={address}
            onChange={handleAddressChange}
          />
          <br />
          <select
            style={{
              marginBottom: "10px",
              marginTop: "10px",
            marginLeft: "90px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
            value={department}
            onChange={handleDepartmentChange}
          >
            {Department.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
          <br />
          <DatePicker
            style={{ marginLeft: "0px", marginTop: "15px" }}
            onChange={handleDateChange}
          />
          <input
            type="time"
            value={time}
            onChange={handleTime}
            style={{
              marginBottom: "10px",
            marginLeft: "30px",
            marginTop: "20px",
              width: "180px",
              padding: "5px",
              borderRadius: "11px",
              border: "1px solid #ccc",
            }}
          />
          <br />
          <SubmitButton
            onClick={handleSubmit}
            type="submit"
            style={{ backgroundColor: "#007E85", width: "180px" }}
          >
            Submit
          </SubmitButton>
        </Form>
      </Container>
      <br />
      <br />
      <ServicesPage />
      <br />
      <br />
      <Rates />
      <br />
      <br />
      <FaqPage />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <h1 style={{ color: "#333333", textAlign: "center", fontSize: "24px" }}>
          Subscribe to our newsletter
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="email"
            placeholder="enter your email"
            style={{
              marginRight: "10px",
              padding: "10px",
              border: "none",
              fontSize: "16px",
              width: "400px",
              borderRadius: "11px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007E85",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "11px",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default BookApp;
