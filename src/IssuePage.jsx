import React, { Component } from 'react';
import TableStore from './TableStore';
import CsvToTable from './table/csvToTable';
import { observer } from 'mobx-react';

class IssuePage extends Component {
    constructor() {
        super();
        this.TableStore = new TableStore();
    }

    render() {
        const {csvData } = this.TableStore;

        return (
            <div>
                <h1>Issue Page</h1><br />
                <CsvToTable csvData={csvData} />
            </div>
        );
    }
}

export default observer(IssuePage);
