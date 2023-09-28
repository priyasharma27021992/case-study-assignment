import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { TableDataService } from 'src/app/core/services/table-data.service';
import { IProductData } from 'src/app/utils/interfaces/interfaces';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-dashboard',
  template: `<ag-grid-angular
    style="width: 100vw; height: 90vh;"
    class="ag-theme-alpine m-2 p-10"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [sideBar]="true"
    [rowData]="rowData"
    (gridReady)="onGridReady($event)">
  </ag-grid-angular>`,
})
export class DashboardComponent {
  public columnDefs: ColDef[] = [];

  public defaultColDef: ColDef = {
    sortable: true,
    flex: 1,
    minWidth: 150,
    resizable: true,
  };

  public rowData!: IProductData[];

  constructor(private api: TableDataService) {}

  onGridReady(params: GridReadyEvent<IProductData>) {
    this.api.getTableData().subscribe((data: IProductData[]) => {
      if (data && data.length) {
        this.columnDefs.length = 0;
        const keys = Object.keys(data[0]);
        keys.forEach(key =>
          this.columnDefs.push({ field: key, filter: 'agMultiColumnFilter' })
        );
        params.api.setColumnDefs(this.columnDefs);
        params.api.setRowData(data);
      }
    });
  }
}
