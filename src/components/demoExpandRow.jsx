import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import Search from './search'
import Header from './header'

class DemoExpandRow extends Component {
    constructor() {
        super();
        
        this.state = {
            data : [
                {'+': '', invoice: 1345, entry: "12-23-2020",discharge: "12-27-2020",patientName: "Elena",lastName:"Gilbert", MRN: 5678,DOB: "10-04-1998",sex: "Female",SSN: 987654},
                {'+': '', invoice: 1346,entry: "09-13-2020",discharge: "09-27-2020",patientName: "Damon", lastName:"Donoven",MRN: 5679,DOB: "01-14-1997",sex: "male",SSN: 987655},
                {'+': '', invoice: 1347,entry: "07-21-2020",discharge: "07-27-2020",patientName: "Stefan", lastName:"Robes",MRN: 5680,DOB: "06-25-1995",sex: "male",SSN: 987656},
                {'+': '', invoice: 1348,entry: "03-23-2020",discharge: "03-27-2020",patientName: "Caroline", lastName:"Gilbert",MRN: 5681,DOB: "05-04-1998",sex: "Female",SSN: 987657},
                {'+': '', invoice: 1349,entry: "03-23-2020",discharge: "03-27-2020",patientName: "Rebekha", lastName:"Donoven",MRN: 5682,DOB: "05-04-1997",sex: "Female",SSN: 987658},
                {'+': '', invoice: 1350,entry: "03-23-2020",discharge: "03-29-2020",patientName: "Tyler", lastName:"Robes",MRN: 5683,DOB: "05-04-1989",sex: "male",SSN: 987659}
            ],
            headings : ['+','invoice', 'entry', 'discharge', 'patientName', 'DOB', 'sex'],
            expandedRows : [],
        };
    }

    handleHeaderData = () => {
        return this.state.headings.map((head, index) => {
            return <th key={index}>{head}</th>
        })
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        
        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(invoice => invoice !== rowId) : 
			currentExpandedRows.concat(rowId);
        
        this.setState({expandedRows : newExpandedRows});
    }
    
    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.invoice);
        const itemRows = [
			<tr onClick={clickCallback} key={"row-data-" + item.invoice}>
                <td>{}</td>
			    <td>{item.invoice}</td>
			    <td>{item.entry}</td>
			    <td>{item.discharge}</td>
                <td>{item.patientName}</td>
                <td>{item.DOB}</td>
                <td>{item.sex}</td>			
			</tr>
        ];
        
        if(this.state.expandedRows.includes(item.invoice)) {
            itemRows.push(
                <tr key={"row-expanded-" + item.invoice}>
                    <td>{}</td>
                    <td>{item.lastName}</td>
                    <td>{item.MRN}</td>
                    <td>{item.SSN}</td>
                </tr>
            );
        }
        
        return itemRows;    
    }
    
    render() {
        let allItemRows = [];
        
        this.state.data.map(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });
        
        return (
          //  <table>{allItemRows}</table>
          <div>
            <Header />
            <br />
            <Search />
            <br />
            <Table striped bordered hover>
              <tbody>
                <tr>{this.handleHeaderData()}</tr>
                {allItemRows}
              </tbody>
            </Table>
          </div>
        );
    }
}

export default DemoExpandRow;