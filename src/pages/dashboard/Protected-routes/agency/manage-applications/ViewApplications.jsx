// ViewApplications.js
import React, { useState, useEffect } from 'react';
import ApplicationTable from './ApplicationTable'; // Make sure the import path is correct
import '../../../../../pages/content.css'

const ViewApplications = () => {
  return (
    <div className="container mx-auto py-8 content-container">
      <ApplicationTable />
    </div>
  );
};

export default ViewApplications;
