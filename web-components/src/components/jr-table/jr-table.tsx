import { Component, h, Element, ComponentInterface } from '@stencil/core';
import { Grid } from 'ag-grid-community';

@Component({
  tag: 'jr-table',
  styleUrl: 'jr-table.css',
  shadow: true
})
export class JrTable implements ComponentInterface {

  @Element() el: HTMLElement;

  agGrid: HTMLElement;

  columnDefs = [
    { headerName: "Brand", field: "make", resizable: true, sortable: true, filter: true },
    { headerName: "Model", field: "model", resizable: true, sortable: true },
    { headerName: "Price", field: "price", resizable: true, sortable: true }
  ];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
    { make: "Fiat", model: "Punto", price: 7000 }
  ];

  gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    onGridReady: function () {
      this.api.sizeColumnsToFit();
    }
  };

  componentDidLoad() {
    this.agGrid = this.el.shadowRoot.querySelector('#jrGrid');
    new Grid(this.agGrid, this.gridOptions);
  }

  render() {
    return (
      <div
        id="jrGrid"
        style={{ height: '250px', width: '600px' }}
        class="ag-theme-alpine"
      ></div>
    );
  }
}