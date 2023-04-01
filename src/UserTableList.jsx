import React,{Component}  from "react";

export default class UserTableList extends Component  {
   constructor(props) {
       super(props);
   }
render() {
   return(
     <table className="tableList">
                  <tr>
                       <th>Name</th>
                       <th>Age</th>
                       <th>Gender</th>
                       <th>Edit</th>
                       <th>Delete</th>
                  </tr>
                     {this.props.tableList.map(listValue =>
                     <tr>
                           <td>{listValue.name}</td>
                           <td>{listValue.age}</td>
                           <td>{listValue.sex}</td>
                           <td><span onClick={()=>this.props.editMethod(listValue)}><i class="material-icons">&#xe254;</i></span></td>
                           <td><span onClick={()=>this.props.deleteMethod(listValue)}><i class="material-icons">delete</i></span></td>
                          </tr>
                     )}
              </table>
     );
     }
 }