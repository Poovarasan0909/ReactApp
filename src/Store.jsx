import { makeAutoObservable} from 'mobx';

export default class Store {
  name = '';
  age = '';
  gender = '';

  constructor() {
    makeAutoObservable(this);
  }

    saveData = () => {
          localStorage.setItem('Object 1', "test object");
          console.log(localStorage, "kjjjkjjkk");
          console.log(this.name,this.age,this.gender);
          this.name = "";
          this.age = "";
        }

  download = () => {
    let newItem = {
      name: this.name,
      age: this.age,
      gender: this.gender
    };
    const fileData = JSON.stringify(newItem);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `fileData.json`;
    link.href = url;
    link.click();
  };

  onChange = (event) => {
    this[event.target.name] = event.target.value;
    console.log(this.name, this.gender);
  };

}




