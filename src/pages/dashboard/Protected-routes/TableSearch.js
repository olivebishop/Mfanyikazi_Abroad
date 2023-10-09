import React, { useState } from "react";

const TableSearch = ({ data, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="my-4 mx-auto w-full max-w-md">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchInputChange}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500"
    />
  </div>
  );
};

export default TableSearch;
