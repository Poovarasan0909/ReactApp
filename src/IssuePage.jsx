import React, { Component } from 'react';
import TableStore from './TableStore';
import CsvToTable from './table/csvToTable';
import { observer } from 'mobx-react';
import ExitingCSVWrite from './table/ExistingCSVWriter';

class IssuePage extends Component {
    constructor() {
        super();
        this.TableStore = new TableStore();
        this.state = {
            count : 0
        }
    }

    componentDidMount() {
        // this.countf();
        // setInterval(() => {
        //     console.log("This executes repeatedly at the specified interval.");
        // }, 5000);
    }
    //
    countf = () => {
        const loop = [1,2,3,4,5,6]
        loop.map((value,index) =>{
            if(value !== 4)
            console.log(index, "--> index")
        } )

        // console.log("11111111111")
        // for(let i=0; i``````` <= 5; i++) {
        //     setTimeout(() => {
        //         console.log(i*1000)
        //         // this.setState({count: i})
        //             document.getElementById("countid").innerText = i
        //         }, i*1000);
        // }
    }


    // countf = () => {
    //     console.log("11111111111");
    //     let i = 0;
    //     const updateCount = () => {
    //         if (i <= 10) {
    //             console.log("mppppppp");
    //             this.setState({ count: i });
    //             document.getElementById("countid").innerText = i;
    //             i++;
    //             setTimeout(updateCount, 1000);
    //         }
    //     };
    //
    //     updateCount();
    // }


    render() {
        this.countf();
        const {csvData } = this.TableStore;
        return (
            <div>
                {/*<h1>Issue Page</h1><br />*/}
                {/*<CsvToTable csvData={csvData} />*/}
                {/*<ExitingCSVWrite />*/}

                <h1>testing</h1>
                <div id="countid">0</div>

            </div>
        );
    }
}

export default observer(IssuePage);
