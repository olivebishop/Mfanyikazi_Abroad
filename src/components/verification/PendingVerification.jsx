import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PendingVerification = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Simulate fetching the verification status from the backend.
    // In a real application, this would involve making an API call.
    const fetchVerificationStatus = async () => {
      try {
        // Fetch verification status from the backend and update isVerified
        // Example response: { isVerified: true }
        // const response = await fetchVerificationStatus();
        // setIsVerified(response.isVerified);

        // Simulate setting verified status
        setIsVerified(true);
      } catch (error) {
        console.error('Error fetching verification status', error);
      }
    };

    fetchVerificationStatus();
  }, []);

  return (
    <div className="p-4 mt-14">
      <h2 className="text-2xl font-semibold mb-4">Pending Verification</h2>
      <h4 className="text-2xl font-semibold mb-4">Dear user</h4>
    
        <p>Your documents are under verification!</p>
    
        <p>You will get a notification in your email once verified, check you the notification under spam section</p>
    
    </div>
  );
};

export default PendingVerification;
