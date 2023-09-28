import { Component } from '@angular/core';
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import { TableDataService } from 'src/app/core/services/table-data.service';
import { IProductData } from 'src/app/utils/interfaces/interfaces';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public columnDefs: ColDef[] = [];

  public defaultColDef: ColDef = {
    sortable: true,
    flex: 1,
    minWidth: 100,
    resizable: true,
    editable: true,
  };

  public rowData!: IProductData[];

  constructor(private api: TableDataService) {}
  public gridApi!: GridApi;
  public gridOptions: GridOptions = <GridOptions>{};

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

  // though it is not working now but if we actual call an api it will work
  refreshData() {
    this.gridApi.refreshCells();
  }
}
