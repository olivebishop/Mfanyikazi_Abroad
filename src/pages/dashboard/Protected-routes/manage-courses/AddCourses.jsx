import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Import the spinner component
//import './TransactionList.css'; // Import your custom CSS

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true); // State for controlling the spinner
  const page = useRef(1);

  const loadMore = () => {
    axios.get(`http://localhost:9000/api/v1/transactions?page=${page.current}`)
      .then((response) => {
        const fetchedTransactions = response.data;
        if (fetchedTransactions.length > 0) {
          setTransactions((prevTransactions) => [...prevTransactions, ...fetchedTransactions]);
          page.current += 1;
        } else {
          setLoading(false); // No more data to load
          setShowSpinner(false); // Hide the spinner
        }
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  };

  useEffect(() => {
    loadMore();
  }, []);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && loading) {
        loadMore();
      }
    })
  );

  const loadMoreRef = useRef();
  useEffect(() => {
    observer.current.observe(loadMoreRef.current);
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-4">Transaction List</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Transaction ID</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.id}</td>
              <td className="border px-4 py-2">${transaction.amount}</td>
              <td className="border px-4 py-2">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showSpinner && (
        <div ref={loadMoreRef} className="text-center mt-4">
          <ClipLoader size={35} color={"#000000"} loading={showSpinner} /> {/* Render the spinner */}
        </div>
      )}
      {!loading && transactions.length === 0 && (
        <div className="text-center mt-4">No transactions found.</div>
      )}
    </div>
  );
}

export default TransactionList;
