import React, {Component} from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class DemoAgGrid extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {name:'raj', age:45},
                {name:'raja', age:25},
                {name:'rajesh', age:35},
                {name:'ram', age:45}
            ],
            columns: [
                {headerName:'Name', field:'name'},
                {headerName:'Age', field: 'age'}
            ],
            defaultColDef: {sortable:true, editable:true, filter:true}
        }
    }
    

    render() {
        return(
            <div className="ag-theme-alpine" style={{ width: '800px', height:'350px' }}>
                <AgGridReact 
                rowData={this.state.data}
                columnDefs={this.state.columns}
                defaultColDef={this.state.defaultColDef}
                />
            </div>
        );
    }
}

export default DemoAgGrid;

// const DemoAgGrid = () => {
//     const data=[
//         {name:'raj', age:45},
//         {name:'raja', age:25},
//         {name:'rajesh', age:35},
//         {name:'ram', age:45}
//     ]
//     const columns = [
//         {headerName:"Name", field:'name'},
//         {headerName:"Age", field:'age'}
//     ]
//     const defaultColDef={sortable:true, editable:true, filter:true}
//     return (
//         <div className="ag-theme-alpine" style={{width:'800px', height:'350px'}}>
//             <AgGridReact 
//             rowData={data}
//             columnDefs={columns}
//             defaultColDef={defaultColDef}/>
//         </div>
//     )
// }

// export default DemoAgGrid;