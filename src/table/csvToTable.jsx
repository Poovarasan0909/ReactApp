import React from 'react';
import '../css/table.css';
import { observer } from 'mobx-react';
import CsvTableStore from './csvTableStore'
import {SaveIcon, PlusIcon, CancelIcon} from '../react-icons/icons';

class CsvToTable extends React.Component {

    constructor() {
        super();
        this.csvTableStore = new CsvTableStore();
    }

    render() {
        const {isEditAble, isSave} = this.csvTableStore;
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
        for (let i = 1; i < csvData.length-1; i++) {
            data.push(csvData[i].split(','));
        }

        return (
            <div>
                <table style={{ width: '90%' }}>
                    <thead>
                    <tr>
                        {header.map((headerItem, index) => (
                            <th key={index} style={{ border: '5px solid black' }}>{headerItem}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, index) => (
                        <tr key = {index}>
                            {row.map((value, cellIndex) => (
                                <td key={cellIndex} style={{ border: '1px solid black' }}>{value}</td>
                            ))}

                            {!isEditAble &&  (index === data.length-1)
                                     ? <span onClick={this.csvTableStore.editOnclick} style={{ cursor: 'pointer' }}> <PlusIcon /></span>
                                     : ''}
                        </tr>
                    ))}
                    {isEditAble &&
                    <tr>
                        {Array(header.length).fill('').map((_, cellIndex) => (
                            <td key={cellIndex} style={{ border: '1px solid black' }} >
                                {(cellIndex !== 0) ?  <input type="text" className="transparent-input"/> : data.length}</td>
                        ))}
                        {<span onClick={this.csvTableStore.saveOnClick} style={{ cursor: 'pointer' }}> <SaveIcon/> </span>}
                        {<span onClick={this.csvTableStore.cancelOnClick} style={{ cursor: 'pointer' }}> <CancelIcon/> </span> }
                    </tr>}
                    </tbody>

                </table>

            </div>
        );
    }
}

export default observer(CsvToTable);
