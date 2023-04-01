import React,{Component}  from "react";
import './User.css';
import  Modal  from 'react-modal';
import ReactDOM from 'react-dom';
import UserTableList from './UserTableList';
import UserLogin from './UserLogin';
import { Audio,Oval } from 'react-loader-spinner';
import {decorate, observable} from "mobx";
import {observer} from "mobx-react";


export default class User extends React.Component {
   constructor(props) {
       super(props);
    }

          name : "";
        age: "";
        sex: "";
        tableList: [];
        id:"";
        isActive: true;
        showPopupForUpdate: false;
        showPopupForDelete:false;
        deleteData: [];
        isSpinning : false;
        isOpening:true;
        userName: "";
        password :"";
        userList : [];
   componentDidMount(){
       this.displayAllUsers()

   }
   componentDidUpdate(){
       this.displayAllUsers()
   }

     onClick = () => {
       fetch("http://localhost:8080/loginUser/getUser")
       .then((res) => res.json())
       .then((res) => {this.setState({ userList : res});})
        {this.state.userList.map(list => {
        if(list.name == this.state.userName && list.password == this.state.password) {
           console.log(list.name);
           console.log(list.password);
           document.getElementById("incrt").innerText = "";
           this.state.isOpening  = false;
        } else {
            document.getElementById("incrt").innerText = "Incorrect login UserName/Password"
            return false
        }
       })}
       }

     cancelPopup = () => {
         this.state.showPopupForDelete = false
         this.state.showPopupForUpdate = false
     }
     yesPopupForDelete = () => {
                console.log(this.state.deleteData.id)
                fetch("http://localhost:8080/user/delete/"+this.state.deleteData.id)
                if(this.state.deleteData.name == this.state.name && this.state.deleteData.age == this.state.age && this.state.deleteData.sex == this.state.sex) {
                   this.state.name = "";
                   this.state.age = "";
                   document.querySelector('input[type=radio]:checked').checked = false;
                   this.state.isActive = true
                }
        this.state.showPopupForDelete = false
     }

   displayAllUsers = () => {
   setTimeout(() => {
   fetch("http://localhost:8080/user/getAllUser")
         .then((res) => res.json())
         .then((res) => {
         this.setState({
         tableList : res,
           });
         })
       },500);

   }
  deleteMethod = (listValue) => {
     this.state.deleteData = listValue
     this.state.showPopupForDelete = true

  }
   onChange = (event) => {
   this.setState({[event.target.name]: event.target.value});
        var reg = new RegExp('^[0-9]+$');
        if(!this.state.name == '') {
              document.getElementById("nam_e").style.border = "0";
              document.getElementById("nameErr").innerText ='';
          }
          if (!this.state.age == "" ) {
              document.getElementById("ageError").style.border = "0";
              document.getElementById("ageErr").innerText = '';
          }
         if(reg.test(this.state.age)){
             document.getElementById("ageErr").innerText = '';
         }
         if(document.querySelector('input[type=radio]:checked').checked === true) {
            document.getElementById("genderErr").innerText = "";
         }
   }

   onSubmit = (event) => {
      var reg = new RegExp('^[0-9]+$');
      reg.test(this.state.age)
     if(this.state.name == "") {
        document.getElementById("nam_e").style.border = "2px solid red";
        document.getElementById("nameErr").innerText ="Name field should be required";
     }
     if (this.state.age == "" ) {
         document.getElementById("ageError").style.border = "2px solid red";
         document.getElementById("ageErr").innerText ="Age field should be required";
     }
     if(this.state.sex == "") {
         document.getElementById("genderErr").innerText ="Gender field should be required";
     } else {
      document.getElementById("genderErr").innerText = "";
     }
     if(!reg.test(this.state.age) && this.state.age !== "") {
          document.getElementById("ageError").style.border = "2px solid red";
          document.getElementById("ageErr").innerText ="Age field invalid";
     }
     if(this.state.name == "" || this.state.age == "" || this.state.sex == "" || !reg.test(this.state.age)) {
       return false
     }
      fetch("http://localhost:8080/user/createUser",{method: "POST",
                  headers : new Headers({'content-type' : 'application/json'}),
                  body:JSON.stringify({name : this.state.name, age : this.state.age,sex : this.state.sex}),
                  })
                  .then((res) => {res.json().then(res => console.log(res))})
                  .catch((res)=> {console.log(res)})
                  this.state.name = "";
                  this.state.age = "";
                  this.state.sex = "";
                  document.querySelector('input[type=radio]:checked').checked = false;
 }
  handleSubmit = () => {
       this.state.name = "";
       this.state.age = "";
       this.state.sex = "";
       document.getElementById("nam_e").style.border = "0";
       document.getElementById("ageError").style.border = "0"
       document.getElementById("nameErr").innerText ="";
       document.getElementById("ageErr").innerText ="";
       document.getElementById("genderErr").innerText ="";
       document.querySelector('input[type=radio]:checked').checked = false;
       this.state.isActive = true;
    }

  editMethod = (listValue) => {
      document.getElementById("nam_e").style.border = "0";
      document.getElementById("ageError").style.border = "0"
      document.getElementById("nameErr").innerText ="";
      document.getElementById("ageErr").innerText ="";
      document.getElementById("genderErr").innerText ="";
      var id = listValue.id;
      this.state.name = listValue.name
      this.state.age = listValue.age
      this.state.sex = listValue.sex
      if(document.getElementById("male").value == listValue.sex) {
       document.getElementById("male").checked = true
      } else if(document.getElementById("female").value == listValue.sex) {
       document.getElementById("female").checked = true
      }
      this.state.id = listValue.id
      console.log(this.state.id)
      this.state.isActive = false
      this.refs.dropdown.focus();
  }
  saveObject = () => {
                var reg = new RegExp('^[0-9]+$');
                reg.test(this.state.age)
                if(this.state.name == "") {
                   document.getElementById("nam_e").style.border = "2px solid red";
                   document.getElementById("nameErr").innerText ="Name field should be required";
                }
                if (this.state.age == "" ) {
                    document.getElementById("ageError").style.border = "2px solid red";
                    document.getElementById("ageErr").innerText ="Age field should be required";
                }
                if(!reg.test(this.state.age) && this.state.age !== "") {
                     document.getElementById("ageError").style.border = "2px solid red";
                     document.getElementById("ageErr").innerText ="Age field invalid";
                }
                if(this.state.name == "" || this.state.age == "" || this.state.sex == "" || !reg.test(this.state.age)) {
                  return false
                }
              this.state.showPopupForUpdate = true
  }
  yesPopUpForUpdate = () => {
             fetch("http://localhost:8080/user/updateUser/"+this.state.id,{method: "POST",
                                      headers : new Headers({'content-type' : 'application/json'}),
                                      body:JSON.stringify({name : this.state.name, age : this.state.age,sex : this.state.sex}),
                                      }).then((res) => {res.json().then(res => console.log(res))})
                                      console.log(this.state.name)
                                       this.state.name = "";
                                       this.state.age = "";
                                       this.state.sex = "";
                                       document.querySelector('input[type=radio]:checked').checked = false;
                                       this.state.isActive = true
                                       this.state.showPopupForUpdate = false
  }


render() {

const customStyles = { content: {
    position : 'fixed',
     width: '40%',
     top: '50%',
     left: '50%',
     right: 'auto',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
     background: '#efefef',
     textAlign: 'center',
     borderRadius:'15px'
   }
 };

return (
<div>
  <div className = "header"></div><br/>

{this.state.isOpening ? <UserLogin userName={this.state.userName} password={this.state.password} onClick={this.onClick} onChange={this.onChange}/>
                      : <div>
                        <div id="formId" ref="dropdown" tabIndex="0">
                        {this.state.isActive ?  <h2>CREATE</h2>: <h2>UPDATE</h2>}
                            <span>
                              <input type = "text" id = "nam_e" name = "name" value = {this.state.name} onChange={this.onChange} placeholder="Name" />
                              <span id="nameErr"></span>
                            </span>
                            <br/><br/>
                            <span>
                              <input type = "text" id = "ageError" name = "age" value = {this.state.age} onChange={this.onChange} placeholder="Age" />
                              <span id ="ageErr"></span>
                            </span>
                            <h3></h3>
                            <div >
                             Gender : &nbsp;&nbsp;<input type = "radio" id = "male" name = "sex" value = "Male" onChange={this.onChange}/>
                              <label for = "sex">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;
                              <input type = "radio" id = "female" name = "sex" value = "Female" onChange={this.onChange} />
                              <label for = "sex">Female</label><br/>
                              <span id ="genderErr"></span>
                            </div>
                            <h1></h1>
                            {this.state.isActive ?  <button id="submitButton"  type = "submit" onClick={this.onSubmit}><b>Submit</b></button>
                                                 : <button id = "saveButton"  onClick={this.saveObject}><b>save</b></button>
                                                    }&nbsp;&nbsp;&nbsp;
                            {this.state.isActive ?  null: <button id = "cancelButton"  onClick={this.handleSubmit}><b>cancel</b></button>}
                              <h1></h1>

                        </div>
                     <h1></h1>
                       <Modal isOpen={this.state.showPopupForDelete} style={customStyles} ariaHideApp={false}>
                       <div className="popupCustom">
                               <button className="close" onClick={this.cancelPopup}><i class="material-icons">close</i></button>
                               <h3> Do you want to delete {this.state.deleteData.name}?</h3>
                               <button className= "popupButton" onClick={this.cancelPopup}>NO</button>&nbsp;&nbsp;&nbsp;&nbsp;
                               <button className= "popupButton"  onClick={this.yesPopupForDelete}>YES</button>
                         </div>
                        </Modal>

                        <Modal isOpen={this.state.showPopupForUpdate} style={customStyles} ariaHideApp={false}>
                                <button className="close" onClick={this.cancelPopup}><i class="material-icons">cancel</i></button>
                               <h3>Do you want to update? </h3>
                               <button className= "popupButton" onClick={this.cancelPopup}>NO</button>&nbsp;&nbsp;&nbsp;&nbsp;
                               <button className= "popupButton"  onClick={this.yesPopUpForUpdate}>YES</button>
                         </Modal>
                         {this.state.tableList == "" ? <div className="loading"><Oval height={80} width={80} color="#4fa94d" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading'
                                                                 secondaryColor="#4fa94d"  strokeWidth={2}  strokeWidthSecondary={2}
                                                               /></div>
                                                     : <UserTableList tableList = {this.state.tableList} deleteMethod = {this.deleteMethod} editMethod={this.editMethod}/> }
                   </div>

      }

   <div className ="footer"></div>
</div>
);
}
}
decorate(User, {name : observable,
                age: observable,
                sex: observable,
                tableList:observable,
                id:observable,
                isActive: observable,
                showPopupForUpdate:observable,
                showPopupForDelete:observable,
                deleteData:observable,
                isSpinning :observable,
                isOpening:observable,
                userName:observable,
                password :observable,
                userList :observable })