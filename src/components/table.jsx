import React, {Component} from 'react'
//import tableData from './tableData'
import ReactTable from "react-table"

// const columns = [
//     {
//         Header: Invoice,
//     }
// ]

class Table extends Component {
    state={
        expanded: {},
        tableData :[
            {
                "Invoice#":1345,
                "Entry": "12-23-2020",
                "Discharge": "12-27-2020",
                "PatientName": "Elena",
                "MRN" : 5678,
                "DOB": "10-04-1998",
                "Sex": "Female",
                "SSN": 987654
            },
            {
                "Invoice#":1346,
                "Entry": "09-13-2020",
                "Discharge": "09-27-2020",
                "PatientName": "Damon",
                "MRN" : 5679,
                "DOB": "01-14-1997",
                "Sex": "male",
                "SSN": 987655
            },
            {
                "Invoice#":1347,
                "Entry": "07-21-2020",
                "Discharge": "07-27-2020",
                "PatientName": "Stefan",
                "MRN" : 5680,
                "DOB": "06-25-1995",
                "Sex": "male",
                "SSN": 987656
            },
            {
                "Invoice#":1348,
                "Entry": "03-23-2020",
                "Discharge": "03-27-2020",
                "PatientName": "Caroline",
                "MRN" : 5681,
                "DOB": "05-04-1998",
                "Sex": "Female",
                "SSN": 987657
            },
            {
                "Invoice#":1349,
                "Entry": "03-23-2020",
                "Discharge": "03-27-2020",
                "PatientName": "Rebekha",
                "MRN" : 5682,
                "DOB": "05-04-1997",
                "Sex": "Female",
                "SSN": 987658
            },
            {
                "Invoice#":1350,
                "Entry": "03-23-2020",
                "Discharge": "03-29-2020",
                "PatientName": "Tyler",
                "MRN" : 5683,
                "DOB": "05-04-1989",
                "Sex": "male",
                "SSN": 987659
            }
        ]
    };

    render() {
        const {data} = this.state;
        return(
            <div>
                <ReactTable 
                data={this.state.tableData}
                defaultPageSize={10}
                expanded={this.state.expanded}
                className="-striped -highlight"
                getTrProps={(state, rowInfo, instance, expanded) => {
                    return {
                        onClick: e=> {
                            const expanded = {...this.state.expanded};
                            expanded[rowInfo.viewIndex] = this.state.expanded[rowInfo.viewIndex] ? false : true;
                            this.setState({ expanded });
                        }
                    };
                }}
                SubComponent={row => {
                    return(
                        <div style={{padding: "20px"}}>
                           <br />
                           <ReactTable 
                           data={this.state.tableData}
                           defaultPageSize={1}
                           showPagination={false}
                           SubComponent={row => {
                               return(
                                   <div style={{padding: "20px"}}>Another sub component</div>
                               );
                           }}
                            /> 
                            <br />
                        </div>
                    );
                }}
                />
            </div>
        );
    }
}

export default Table;