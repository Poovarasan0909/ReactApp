import React from 'react';
import { CSVLink } from 'react-csv';

const App1 = () => {
  const data = [
    { name: 'John Doe', email: 'johndoe@example.com', city: 'New York' },
    { name: 'Jane Smith', email: 'janesmith@example.com', city: 'Los Angeles' },
    // Add more data as needed
  ];

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'City', key: 'city' },
  ];

  return (
    <div>
      <CSVLink data={data} headers={headers} filename={'data.csv'}>
        Download CSV
      </CSVLink>
    </div>
  );
};

export default App1;