import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const ExistingCSVWriter = () => {
    const [csvData, setCSVData] = useState([]);

    useEffect(() => {
        // Replace 'existing_data.csv' with the path to your existing CSV file
        Papa.parse('./CsvFile/testList.csv', {
            download: true,
            header: true,
            complete: (results) => {
                setCSVData(results.data);
            },
        });
    }, []);

    const handleWriteToCSV = () => {
        // Manipulate the CSV data as needed, e.g., adding a new row
        const newRow = {
            Name: 'John Doe',
            Age: 30,
            Email: 'john.doe@example.com',
        };

        const updatedCSVData = [...csvData, newRow];

        // Convert the updated data to a CSV-formatted string
        const csvString = Papa.unparse(updatedCSVData);

        // Write the CSV string back to the file
        // Note: Writing to the file directly from the browser is restricted for security reasons.
        // You'll need a server-side component or backend API to handle the file writing.

        // For example, if you have a backend API to handle the write operation, you can use fetch or Axios:
        // fetch('/path/to/your/backend/api', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'text/csv',
        //     },
        //     body: csvString,
        // }).then((response) => {
        //     // Handle the response, e.g., show a success message or handle errors
        // });
    };

    return (
        <div>
            {/* Your JSX code */}
            <button onClick={handleWriteToCSV}>Write to CSV</button>
        </div>
    );
};

export default ExistingCSVWriter;
