import axios from 'axios';

export const sendAppointmentEmail = (email, name, date, time,department) => async dispatch => {
  const greetingMessage = `Hello ${name}, Your book For the department ${department} has been confirmed, one of our doctors will be in touch with you soon, Your appointment date is : ${date} at ${time}.`;
  const emailBody = {
    to: email,
    subject: "Your appointment has been booked successfully!",
    html: greetingMessage,
  };

  try {
    const emailResponse = await axios.post("http://localhost:3000/api/sendmail", emailBody);
    dispatch({ type: 'SEND_APPOINTMENT_EMAIL_SUCCESS', payload: emailResponse.data });
  } catch (error) {
    dispatch({ type: 'SEND_APPOINTMENT_EMAIL_FAILURE', payload: error });
  }
};

export const sendSignupEmail = (email, name) => async dispatch => {
  const greetingMessage = `Hello ${name}, thank you for signing up! Welcome to our platform.`;
  const emailBody = {
    to: email,
    subject: "Welcome to our platform!",
    html: greetingMessage,
  };

  try {
    const emailResponse = await axios.post("http://localhost:3000/api/sendmail", emailBody);
    dispatch({ type: 'SEND_SIGNUP_EMAIL_SUCCESS', payload: emailResponse.data });
  } catch (error) {
    dispatch({ type: 'SEND_SIGNUP_EMAIL_FAILURE', payload: error });
  }
};