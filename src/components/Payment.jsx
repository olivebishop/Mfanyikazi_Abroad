import React from 'react';
import { usePaystackPayment } from 'react-paystack';

const config = {
  reference: (new Date()).getTime().toString(),
  email: 'olivehend***************',
  amount: 1000,
  publicKey: 'pk_test_a7961d4fbea******************',
  currency: 'KES',
  channels: ['card', 'mobile_money'],
};

function Payment({ onSuccess }) {
  const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
    localStorage.setItem('paymentCompleted', 'true');
    onSuccess(); // Call the parent component's success callback
  };

  const handlePaystackCloseAction = () => {
    console.log('Payment closed');
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayClick = () => {
    initializePayment(handlePaystackSuccessAction, handlePaystackCloseAction);
  };

  return (
    <div className="App">
      <div>
        <button
          className="py-2 px-4 rounded-full bg-green-500 text-white hover:bg-green-600 mt-0"
          onClick={handlePayClick}
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Payment;
