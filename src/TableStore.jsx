import { makeAutoObservable} from 'mobx';
import Papa from 'papaparse';
import csvFilePath from './issueList.csv';
import {Component, React} from "react";


export default class TableStore{
    data = [];
    columns = ['S.No', 'Issue Description', 'Jira No.','Status', 'Test Status', 'Approve Status', 'Deploy Status'];
    csvData = [];
    header = [];
    constructor() {
        makeAutoObservable(this);
           this.load().then(() => {
                            console.log(this.csvData, 'csv');
                            console.log(this.header, 'header');
                            console.log(this.data ,'data');
                          });
      }

        load = async () => {
            const response = await fetch(csvFilePath);
            const responseText = await response.text();
             this.csvData = responseText.split('\n');
             this.header =  this.csvData[0].split(',');
             for(let i=1; i <= responseText.split('\n').length-1;i++){
               this.data[i-1] = responseText.split('\n')[i];
               console.log(this.data, 'dat,...a');
             }
        }

}