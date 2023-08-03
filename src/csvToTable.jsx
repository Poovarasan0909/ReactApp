import React from 'react';
import { observer } from 'mobx-react';

class CsvToTable extends React.Component {
    render() {
        const { csvData } = this.props;

        if (!csvData || csvData.length === 0) {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            );
        }

        const header = csvData[0].split(',');
        const data = [];
        for (let i = 1; i < csvData.length; i++) {
            data.push(csvData[i].split(','));
        }

        return (
            <div>
                <table style={{ border: '1px solid black', width: '90%' }}>
                    <thead>
                    <tr>
                        {header.map((headerItem, index) => (
                            <th key={index} style={{ border: '5px solid black' }}>{headerItem}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((value, cellIndex) => (
                                <td key={cellIndex} style={{ border: '1px solid black' }}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default observer(CsvToTable);
