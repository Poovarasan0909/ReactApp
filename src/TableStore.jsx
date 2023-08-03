import { makeAutoObservable } from 'mobx';
import Papa from 'papaparse';
import csvFilePath from './issueList.csv';

export default class TableStore {

    constructor() {
        makeAutoObservable(this);
        this.load();
    }

    csvData = [];

    load = async () => {
        const response = await fetch(csvFilePath);
        const responseText = await response.text();
        this.csvData = responseText.split('\n');
    }
}
