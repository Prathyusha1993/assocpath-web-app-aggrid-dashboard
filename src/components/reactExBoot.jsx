import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const expandRow = {
  renderer: row => <div>age: {row.age}</div>
};
// {
//     <Table striped bordered hover>
//         <tbody>
//             <tr>{this.handleHeaderData()}</tr>
//                 {allItemRows}
//             </tbody>
//     </Table>
//   }
{/* <div>age: {row.age}</div> */}
const columns = [
  {
    dataField: "id",
    text: "ID"
  },
  {
    dataField: "firstName",
    text: "first name"
  },
  {
    dataField: "lastName",
    text: "last name"
  }
];

const persons = [
  { id: 1, firstName: "james", lastName: "smith", age: 20 },
  { id: 2, firstName: "alex", lastName: "green", age: 20 },
  { id: 3, firstName: "may", lastName: "jones", age: 18 }
];

export default function ReactExBoot() {
  return (
    <div className="App">
      <BootstrapTable
        keyField="id"
        data={persons}
        columns={columns}
        expandRow={expandRow}
      />
    </div>
  );
}