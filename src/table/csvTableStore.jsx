import {makeAutoObservable} from 'mobx';

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
}