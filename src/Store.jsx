import React from 'react';
import{decorate, observable} from 'mobx';


export default class Store {
              name;
              age;
              gender ="";

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
                       }
                const fileData = JSON.stringify(newItem);
                const blob = new Blob([fileData], {type: "text/plain"});
                const url = URL.createObjectURL(blob);
                const link = document.createElement('c');
                link.download = `fileData.json`;
                link.href = url;
                link.click();
       }
      onChange = (event) => {
        this[event.target.name]=event.target.value;
        console.log(this.name, this.gender);

       }
}
decorate(Store,{
      name:observable,
      age:observable,
      gender:observable
})