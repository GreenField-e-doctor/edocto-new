import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [paymentStatus, setPaymentStatus] = useState('error');

  const handleTryAgain = async () => {
    try {
      // Make a request to the backend to initiate payment
      const response = await axios.post('/api/add', { amount: /* Your amount value here */ });
      console.log(response.data); // Handle the response accordingly
      setPaymentStatus('success');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8/12">
          {paymentStatus === 'error' && (
            <form className="ui large-form">
              <div className="ui icon negative message">
                <i className="warning icon" />
                <div className="content">
                  <div className="header">Oops! Something went wrong.</div>
                  <p>While trying to reserve money from your account</p>
                </div>
              </div>
              <button
                onClick={handleTryAgain}
                className="w-full px-4 py-2 bg-teal-500 text-white text-lg font-bold uppercase rounded mt-4"
              >
                Try again
              </button>
            </form>
          )}

          {paymentStatus === 'success' && (
            <div className="bg-gray-100 h-screen">
              <div className="bg-white p-6 md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Payment Done!
                  </h3>
                  <p className="text-gray-600 my-2">
                    Thank you for completing your secure online payment.
                  </p>
                  <p>Have a great day!</p>
                  <div className="py-10 text-center">
                    <a href="/client/dashboard/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                      CONTINUE SHOPPING
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
