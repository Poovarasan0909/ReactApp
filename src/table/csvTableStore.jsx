import {makeAutoObservable} from 'mobx';
import {CSVLink} from "react-csv";

export default class csvTableStore {


    constructor() {
        makeAutoObservable(this);
    }
    isEditAble = false;
    isSave = false;

    editOnclick = () => {
        this.isEditAble = true;
        this.isSave = false;
        console.log(";;;;;;;")
    }
    saveOnClick = () => {
        this.isSave = true;
        this.isEditAble = false;
    }
    cancelOnClick = () => {
        this.isEditAble = false;
        this.isSave = true;
    }
     MyComponent = () => {
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
                <CSVLink data={data} headers={headers} filename={'../CsvFile/testList.csv'}>
                    Download CSV
                </CSVLink>
            </div>
        );
    };

}