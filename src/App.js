import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
           <div id="formId">
                   <h2>CREATE</h2>
                   <span>
                     <input type = "text" id = "nam_e" name = "name"  placeholder="Name" />
                     <span id="nameErr"></span>
                   </span>
                   <br/><br/>
                   <span>
                     <input type = "text" id = "ageError" name = "age"   placeholder="Age" />
                     <span id ="ageErr"></span>
                   </span>
                   <br/><br/>
                   <div>
                    Gender : &nbsp;&nbsp;<input type = "radio" id = "male" name = "gender" value = "Male" />
                     <label for = "gender">Male</label>
                     <input type = "radio" id = "female" name = "gender" value = "Female"  />
                     <label for="gender">Female</label><br/>
                     <span id ="genderErr"></span>
                   </div>
    </div></div>
  );
}

export default App;
