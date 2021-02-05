import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


class AgGrid extends Component {
    constructor(props){
        super(props);
        this.state={
            modules: [
                ClientSideRowModelModule,
                MasterDetailModule,
                MenuModule,
                ColumnsToolPanelModule,
            ],
            columnDefs: [
                {
                  field: 'Invoice_Num',
                  cellRenderer: 'agGroupCellRenderer',
                },
                { field: 'Adm_Visit_Date',
                //cellRenderer: 'agGroupCellRenderer' 
                },
                { field: 'Discharge_Date' },
                {field: 'Patient_First_Name'},
                {field: 'Patient_Last_Name'},
                {field: 'MRN'},
                {field: 'DOB'},
                {field: 'Sex'},
                {field: 'SSN'},
                {field: 'Street_Addr'},
                {field: 'Guarantor_Name'},
                {field: 'Guar_Street_Addr'},
                {field: 'Hospital'},
                {field: 'RefferinigPhysician'},
                {field: 'Pathologist'},
                {field: 'Invoice_FSC_List'},
                {field: 'Total_Charges'},
                {field: 'Invoice_Balance'},
              ],
              rowData: [
                {Invoice_Num: 1345, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
                {Invoice_Num: 1346, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "male",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
                {Invoice_Num: 1347, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
                {Invoice_Num: 1348, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "male",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
                {Invoice_Num: 1349, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
                {Invoice_Num: 1350, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
                {Invoice_Num: 1351, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
                {Invoice_Num: 1352, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" }
            ],
            rowDetailData: [
                {ICD_Codes:" C50.412 Malig neoplasm of upper-outer ,C50.612 Malignant neoplasm of axillary", Insurance_Details:"UHC Chc Chc Plus Atlanta,PO BOX 740800,ATLANTA, GA,30374", Txn_seq:"1"}
            ],
            defaultColDef: {sortable:true, filter:true},
        detailCellRendererParams: {
            detailGridOptions: {
              columnDefs: [
                { field: 'ICD_Codes',
                minWidth: 550, },
                { field: 'Insurance_Details',
                minWidth: 450, },
                {field: 'Txn_seq',
                   minWidth: 100,
                }
              ],
            //   defaultColDef: { flex: 1 },
            },
            getDetailRowData: function (params) {
                params.successCallback(this.state.rowDetailData);
            }.bind(this),
          },
        };
    }


    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    render(){
        return(
            <div  style={{ width: '100%', height:'100%' }}>
                <div 
                    id="myGrid"
                    className="ag-theme-alpine"
                    style={{
                        height: '1000px',
                        width: '100%',
                    }}>
                <AgGridReact
                    modules={this.state.modules}
                    rowData = {this.state.rowData} 
                    columnDefs = {this.state.columnDefs}
                    defaultColDef={this.state.defaultColDef}
                    masterDetail={true}
                    detailCellRendererParams={this.state.detailCellRendererParams}
                    onGridReady={this.onGridReady}
                />
            </div>
            </div>
        );
    }
}

export default AgGrid;