import React from "react";

const Content = () => {
  return (
    <section className="p-4 md:p-8 lg:p-10 xl:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Users Widget */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Users</h3>
          {/* Add users content here */}
        </div>

        {/* Countries Widget */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Countries</h3>
          {/* Add countries content here */}
        </div>

        {/* Courses Widget */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Courses</h3>
          {/* Add courses content here */}
        </div>

        {/* Jobs Widget */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">Jobs</h3>
          {/* Add jobs content here */}
        </div>
      </div>

      {/* About Page Content */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">About</h3>
        {/* Add about page content here */}
      </div>
    </section>
  );
};

export default Content;
