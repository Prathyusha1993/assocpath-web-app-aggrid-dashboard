import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import {masterDetailData} from './data';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: [
        ClientSideRowModelModule,
        MasterDetailModule,
        MenuModule,
        ColumnsToolPanelModule,
      ],
      columnDefs: [
        {
          field: 'name',
          cellRenderer: 'agGroupCellRenderer',
        },
        { field: 'account' },
        { field: 'calls' },
        {
          field: 'minutes',
          valueFormatter: "x.toLocaleString() + 'm'",
        },
      ],
      defaultColDef: { flex: 1 },
      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: [
            { field: 'callId' },
            { field: 'direction' },
            {
              field: 'number',
              minWidth: 150,
            },
            {
              field: 'duration',
              valueFormatter: "x.toLocaleString() + 's'",
            },
            {
              field: 'switchCode',
              minWidth: 150,
            },
            { field: 'callId' },
            { field: 'direction' },
            {
              field: 'number',
              minWidth: 150,
            },
            {
              field: 'duration',
              valueFormatter: "x.toLocaleString() + 's'",
            },
            {
              field: 'switchCode',
              minWidth: 150,
            },
            { field: 'callId' },
            { field: 'direction' },
            {
              field: 'number',
              minWidth: 150,
            },
            {
              field: 'duration',
              valueFormatter: "x.toLocaleString() + 's'",
            },
            {
              field: 'switchCode',
              minWidth: 150,
            },
          ],
          defaultColDef: { flex: 1 },
        },
        getDetailRowData: function (params) {
          params.successCallback(this.state.callRecords);
        }.bind(this),
      },
      rowData: null,
      callRecords: [
        {
          name: "susan",
          callId: 579,
          duration: 23,
          switchCode: "SW5",
          direction: "Out",
          number: "(02) 47485405",
        },
        {
          name: "susan",
          callId: 580,
          duration: 52,
          switchCode: "SW3",
          direction: "In",
          number: "(02) 32367069",
        },
        {
          name: "susan",
          callId: 581,
          duration: 39,
          switchCode: "SW7",
          direction: "Out",
          number: "(07) 13532649",
        },
        {
          name: "susan",
          callId: 582,
          duration: 51,
          switchCode: "SW6",
          direction: "Out",
          number: "(08) 45645627",
        }
      ]
    };
  }

  // handleRowData = (params) => {
  //   params.successCallback(params.data.callRecords);
  //   console.log(this);
  // }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ rowData: data });
    //   });
    this.setState({rowData: masterDetailData});
  };

  onFirstDataRendered = (params) => {
    setTimeout(function () {
      params.api.getDisplayedRowAtIndex(0).setExpanded(true);
    }, 0);
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          id="myGrid"
          style={{
            height: '1000px',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
             modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            masterDetail={true}
            detailCellRendererParams={this.state.detailCellRendererParams}
            onGridReady={this.onGridReady}
            onFirstDataRendered={this.onFirstDataRendered.bind(this)}
            rowData={this.state.rowData}
          />
        </div>
      </div>
    );
  }
}

export default GridExample;