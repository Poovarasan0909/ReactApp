import {Component} from "react";
import Store from './Store.jsx';
import {observer} from "mobx-react";
class Sample extends Component {

            componentWillMount() {
                 this.Store = new Store();
             }

          render() {
              return (
              <div id="formId">
                     <h2>CREATE</h2>
                     <span>
                       <input type = "text" id = "nam_e" name = "name" value = {this.Store.name} onChange = {this.Store.onChange} placeholder="Name" />
                       <span id="nameErr"></span>
                     </span>
                     <br/><br/>
                     <span>
                       <input type = "text" id = "ageError" name = "age" value = {this.Store.age} onChange = {this.Store.onChange} placeholder="Age" />
                       <span id ="ageErr"></span>
                     </span>
                     <br/><br/>
                     <div>
                      Gender : &nbsp;&nbsp;<input type = "radio" id = "male" name = "gender" value = "Male" onChange = {this.Store.onChange}/>
                       <label for = "gender">Male</label>
                       <input type = "radio" id = "female" name = "gender" value = "Female" onChange = {this.Store.onChange} />
                       <label for="gender">Female</label><br/>
                       <span id ="genderErr"></span>
                     </div><br/>
                  <button onClick={this.Store.saveData}>Save!</button> &nbsp;&nbsp; <button onClick = {this.Store.download}>Download</button>
                   <Link to="/dashboard">
                       <button type="button">
                            Click Me!
                       </button>
                   </Link>
                   <a href="http://localhost:8080/b0717eb7-8a76-404e-a69d-6595428f9a6d/error"> <button>Link</button></a>
                </div>
              );
          }
}
export default observer(Sample);