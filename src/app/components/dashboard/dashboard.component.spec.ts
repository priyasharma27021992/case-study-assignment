import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AgGridModule],
      declarations: [DashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  it('should create the DashboardComponent', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboardComponent = fixture.debugElement.componentInstance;
    expect(dashboardComponent).toBeTruthy();
  });
});
