import React from 'react';
import { usePaystackPayment } from 'react-paystack';

const config = {
  reference: (new Date()).getTime().toString(),
  email: "olivehendrilgen1@gmail.com",
  amount: 10, 
  publicKey: 'pk_live_abb46c94037e7ed68475a89415ebcb2fd5b3dbc5', 
  currency: 'KES', 
  channels: ["card", "mobile_money"], 
};

function Report() {
  
  const handlePaystackSuccessAction = (reference) => {
  
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
        <button
          className="py-2 px-4 rounded-full bg-slate-500 text-white hover:bg-green-500 mt-24"
          onClick={handlePayClick} //  It Triggers the Paystack pop-up on button click
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Report;
