import React, { Component } from 'react';

class KeyValuePairs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            value: '',
            keyValuePairs: [],
            test : [{key: {}, value:{}}]
        };
    }

    handleKeyChange = (event) => {
        this.setState({ key: event.target.value });
        this.state.key = "djfv"
    };

    handleValueChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.state.test.key.push("sdfvsf")
        this.state.test.value.push("value")
        this.state.test.key.push("ikkklk")
        this.state.test.value.push("1111")

        console.log(this.state.test,",kkkkkkkkk")

        // Add the new key-value pair to the list
        const { key, value } = this.state;
        const keyValuePairs = [...this.state.keyValuePairs, { key, value }];

        this.setState({
            key: '',
            value: '',
            keyValuePairs,
        });
    };

   // handleDownload = () => {
   //     const link = document.createElement('a');
   //     link.href = 'https://s3.amazonaws.com/inf-testing/resources/deal_application_files/1_AMERICAN_FACILITY_SOLUTIONS_LLC_19K_09-11-23_09-11-2023_141257.pdf'
   //
   //
   //
   //
   // }

    render() {
        return (
            <div>k
                <table>
                    <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.keyValuePairs.map((pair, index) => (
                        <tr key={index}>
                            <td>{pair.key}</td>
                            <td>{pair.value}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><input
                            type="text"
                            value={this.state.key}
                            onChange={this.handleKeyChange}
                        />
                        </td>
                        <td><input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleValueChange}
                        />
                        </td> <button type="submit" onClick={this.handleSubmit}>plus</button>

                    </tr>
                    </tbody>
                </table>
                <button onClick={this.handleDownload}>
                   Download File
                </button>
            </div>
        );
    }
}

export default KeyValuePairs;




// import React from 'react';
//
// function DownloadButton() {
//     const handleDownload = () => {
//         // Replace 'your-file-link-here' with the actual file URL
//         const fileUrl = 'your-file-link-here';
//         const link = document.createElement('a');
//         link.href = fileUrl;
//         link.download = 'your-file-name'; // Set the desired file name
//         link.click();
//     };
//
//     return (
//         <button onClick={handleDownload}>Download File</button>
//     );
// }
//
// export default DownloadButton;

