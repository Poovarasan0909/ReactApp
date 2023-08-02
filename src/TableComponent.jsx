import {React, Component} from 'react';
import TableStore from './TableStore';
import {observer} from "mobx-react";
import Select from 'react-select';

class TableComponent extends Component {
            componentWillMount() {
                 this.TableStore = new TableStore();
             }


render() {
      const {data, columns, header} = this.TableStore;

       return(
       <div>
          <h1> Issue Page </h1><br/>
         <table style={{ border: '1px solid black', width: '100%' }}>
                 <thead>
                   <tr>
                        {header.map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                   </tr>
                 </thead>
                 <tbody>
                    {data.map( (data,index) => {
                     const rowValues = data.split(',');
                     return (
                       <tr key={index}>
                       {rowValues.map((value,i) => (
                       <td key={i}>{value} </td>
                       ))}
                       </tr>
                     );
                       })}
                 </tbody>
               </table>
         </div>
       );
}

}
export default observer(TableComponent)
