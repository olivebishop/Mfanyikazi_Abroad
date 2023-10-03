import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import axios from 'axios'; // Import Axios for making API requests

const config = {
  reference: (new Date()).getTime().toString(),
  email: "olivehendrilgen1@gmail.com",
  amount: 1000, 
  publicKey: 'pk_live_abb46c94037e7ed68475a89415ebcb2fd5b3dbc5', 
  currency: 'KES', 
  channels: ["card", "mobile_money"], 
};

function Report() {
  const handlePaystackSuccessAction = (reference) => {
    // Save the transaction information to your database or storage system
    const transactionData = {
      reference: reference,
      amount: config.amount,
      currency: config.currency,
      date: new Date().toISOString(),
    };

    // Make an API request to your backend to save the transaction data
    axios.post('/api/save-transaction', transactionData)
      .then((response) => {
        // Handle success
        console.log('Transaction data saved successfully');
      })
      .catch((error) => {
        // Handle error
        console.error('Error saving transaction data:', error);
      });

    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    console.log('Payment closed');
  }

  const initializePayment = usePaystackPayment(config);

  const handlePayClick = () => {
    initializePayment(handlePaystackSuccessAction, handlePaystackCloseAction);
  };

  return (
    <div className="App">
      <div>
        {/* Additional content */}
        <h3 className='text-center text-black mt-20'>Welcome to mfanyikazi payment</h3>
        <p className='mt-5'>Kindly make the necessary payment to access the courses page</p>
        <button
          className="py-2 px-4 rounded-full bg-slate-500 text-white hover:bg-green-500 mt-24"
          onClick={handlePayClick} // Triggers the Paystack pop-up on button click
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Report;
