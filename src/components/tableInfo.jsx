import React, { Component } from "react";
import {Table} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class TableInfo extends Component {
  state = {
    tableData: [
      {
        "Invoice": 1345,
        Entry: "12-23-2020",
        Discharge: "12-27-2020",
        PatientName: "Elena",
        MRN: 5678,
        DOB: "10-04-1998",
        Sex: "Female",
        SSN: 987654,
      },
      {
        "Invoice": 1346,
        Entry: "09-13-2020",
        Discharge: "09-27-2020",
        PatientName: "Damon",
        MRN: 5679,
        DOB: "01-14-1997",
        Sex: "male",
        SSN: 987655,
      },
      {
        "Invoice": 1347,
        Entry: "07-21-2020",
        Discharge: "07-27-2020",
        PatientName: "Stefan",
        MRN: 5680,
        DOB: "06-25-1995",
        Sex: "male",
        SSN: 987656,
      },
      {
        "Invoice": 1348,
        Entry: "03-23-2020",
        Discharge: "03-27-2020",
        PatientName: "Caroline",
        MRN: 5681,
        DOB: "05-04-1998",
        Sex: "Female",
        SSN: 987657,
      },
      {
        "Invoice": 1349,
        Entry: "03-23-2020",
        Discharge: "03-27-2020",
        PatientName: "Rebekha",
        MRN: 5682,
        DOB: "05-04-1997",
        Sex: "Female",
        SSN: 987658,
      },
      {
        "Invoice": 1350,
        Entry: "03-23-2020",
        Discharge: "03-29-2020",
        PatientName: "Tyler",
        MRN: 5683,
        DOB: "05-04-1989",
        Sex: "male",
        SSN: 987659,
      },
    ],
    headings : ['Invoice', 'Entry', 'Discharge', 'PatientName', 'MRN', 'DOB', 'Sex', 'SSN']
  };


  handleHeader = () => {
    return this.state.headings.map((index, head) => {
        return <th key={index}>{head}</th>
    })
  }

//   handleTableHeader = () => {
//       return this.state.headings.map((header) => {
//           return <TableHeaderColumn key={header.Invoice} dataField={header} isKey={header.Invoice === 0 ? true : false} dataSort={true}>{header}</TableHeaderColumn>
//       })
//   }

  render() {
    //   const rows = this.state.tableData.map((row) => {
    //       return(
    //           <tr key={row.MRN}>
    //               <td>{row.Invoice}</td>
    //               <td>{row.Entry}</td>
    //               <td>{row.Discharge}</td>
    //               <td>{row.PatientName}</td>
    //               <td>{row.MRN}</td>
    //               <td>{row.DOB}</td>
    //               <td>{row.Sex}</td>
    //               <td>{row.SSN}</td>
    //           </tr>
    //       )
    //   });

    return (
      <div>
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              {this.handleHeader()}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table> */}
        <BootstrapTable data={this.state.tableData} keyField='Invoice' hover={true} striped={true}>
            <TableHeaderColumn width='150' dataField='Invoice' dataSort={true}>Invoice</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='Entry'  dataSort={true}>Entry</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='Discharge' dataSort={true}>Discharge</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='PatientName' dataSort={true}>PatientName</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='MRN' dataSort={true}>MRN</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='DOB' dataSort={true}>DOB</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='Sex' dataSort={true}>Sex</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='SSN' dataSort={true}>SSN</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TableInfo;
