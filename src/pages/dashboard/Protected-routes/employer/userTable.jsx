import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import axios from 'axios';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

// Function to send a verification email
const sendVerificationEmail = async (userId, userRole) => {
  try {
    const response = await axios.post('http://localhost:9000/api/v1/sendVerificationEmail', {
      userId,
      userRole,
    });

    // Handle the response (e.g., display a success message)
    console.log('Verification email sent:', response.data.message);
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error('Error sending verification email:', error);
  }
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [userRoles, setUserRoles] = useState({});

  useEffect(() => {
    // Fetch users from your API endpoint
    axios.get('http://localhost:9000/api/v1/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'User ID',
        accessor: 'id',
      },
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => {
          const userRole = userRoles[row.original.id] || '';
          return (
            <div className="flex items-center justify-center space-x-2">
              <select
                value={userRole}
                onChange={(e) => handleRoleChange(e, row.original.id)}
                className="py-1 px-2 rounded bg-slate-300 text-slate-900"
              >
                <option value="">Assign Role</option>
                <option value="admin">Admin</option>
                <option value="agency">Agency</option>
                <option value="employer">Employer</option>
                <option value="employee">Employee</option>
              </select>
              <button
                onClick={() => handleVerify(row.original)}
                className="bg-slate-900 hover:bg-gray-600 text-white px-2 py-1 rounded"
              >
                Verify
              </button>
            </div>
          );
        },
      },
    ],
    [userRoles]
  );

  const handleRoleChange = (e, userId) => {
    const { value } = e.target;
    setUserRoles((prevRoles) => ({
      ...prevRoles,
      [userId]: value,
    }));
  };

  const handleVerify = (user) => {
    console.log('Verifying user:', user);
    const role = userRoles[user.id];
    if (role) {
      // Send a request to your backend API to assign the role and send the verification message
      axios
        .post('http://localhost:9000/api/v1/assignRoleAndNotify', {
          userId: user.id,
          role,
        })
        .then((response) => {
          // Handle the response from the API (e.g., display a success message)
          setVerificationMessage(`User ${user.username} verified as ${role}.`);

          // Call the function to send the verification email
          sendVerificationEmail(user.id, role);
        })
        .catch((error) => {
          // Handle any errors from the API (e.g., display an error message)
          console.error('Error assigning role and notifying user:', error);
          setVerificationMessage('Error assigning role. Please try again later.');
        });
    } else {
      console.log('Please select a role to assign before verifying.');
    }
  };

  const data = React.useMemo(() => users, [users]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full table-auto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-slate-900 text-white">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-2 text-center font-semibold cursor-pointer"
                >
                  {column.render('Header')}
                  <span className="ml-1">
                    {column.isSorted ? (column.isSortedDesc ? <FaCaretDown /> : <FaCaretUp />) : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-400'}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-2 text-center"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination mt-4 flex items-center justify-center">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`px-4 py-2 rounded-md ${
            canPreviousPage
              ? 'bg-slate-900 hover:bg-slate-600'
              : 'bg-gray-700 cursor-not-allowed'
          } text-white`}
        >
          Previous
        </button>
        <span className="mx-4">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`px-4 py-2 rounded-md ${
            canNextPage
              ? 'bg-slate-900 hover:bg-slate-600'
              : 'bg-gray-700 cursor-not-allowed'
          } text-white`}
        >
          Next
        </button>
      </div>
      <div className="verification-message mt-4">
        <p>{verificationMessage}</p>
      </div>
    </div>
  );
};

export default UserTable;