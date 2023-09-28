import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockData } from '../../utils/mocks/table_data';
import { Observable, of } from 'rxjs';
import { IProductData } from 'src/app/utils/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  constructor(private http: HttpClient) {}

  rootURL = '/api';

  getTableData(): Observable<IProductData[]> {
    this.http.get(this.rootURL + '/products');
    // not calling the actual api so using the mockData
    return of(Array.from(Object.values(mockData)));
  }
}
