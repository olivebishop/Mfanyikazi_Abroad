import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubmitVerification = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    nationalId: null,
    kraCert: null,
    goodConduct: null,
    companyRegistrationId: null,
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    setFiles((prevFiles) => ({ ...prevFiles, [type]: file }));
  };

  const handleSubmit = () => {
    // Here you would need to implement the logic to send files to the backend
    // and then handle the navigation based on verification status.

    // For this example, let's assume successful submission.
    toast.success('Documents submitted to admin.');
    navigate('/pending-verification'); // Navigate to pending verification
  };

  return (
    <div className="p-4 mt-14">
      <h4 className="text-2xl font-semibold mb-4">Dear Agency Kindly</h4>
      <h2 className="text-2xl font-semibold mb-4">Submit your documents  for approval</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="nationalId">National ID:</label>
          <input
            type="file"
            id="nationalId"
            onChange={(e) => handleFileChange(e, 'nationalId')}
          />
        </div>
        <div>
          <label htmlFor="kraCert">KRA Certificate:</label>
          <input
            type="file"
            id="kraCert"
            onChange={(e) => handleFileChange(e, 'kraCert')}
          />
        </div>
        <div>
          <label htmlFor="goodConduct">Good Conduct Certificate:</label>
          <input
            type="file"
            id="goodConduct"
            onChange={(e) => handleFileChange(e, 'goodConduct')}
          />
        </div>
        <div>
          <label htmlFor="companyRegistrationId">Company Registration ID:</label>
          <input
            type="file"
            id="companyRegistrationId"
            onChange={(e) => handleFileChange(e, 'companyRegistrationId')}
          />
        </div>
      </div>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit Documents
      </button>
      <ToastContainer />
    </div>
  );
};

export default SubmitVerification;
