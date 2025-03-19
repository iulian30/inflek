import {AfterViewInit, ChangeDetectorRef, Component, inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {DashboardService, Partner} from '../../../../services/dashboard/DashboardService';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-content-table',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule,CommonModule],
  templateUrl: './content-table.component.html',
  styleUrl: './content-table.components.scss'
})

export class ContentTableComponent implements AfterViewInit {
  partners: Partner[] = [];
  displayedColumns: string[] = ['id', 'partnerName', 'partnerType', 'conversions', 'commissions', 'grosssales', 'contract', 'details'];
  dataSource = new MatTableDataSource<Partner>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dashboardService: DashboardService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.dashboardService.getPartners().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();
      },
      (error) => {

        this.cdr.detectChanges();
      }
    );
  }

  getTotalPages(): number {
    if (this.paginator) {
      return Math.ceil(this.paginator.length / this.paginator.pageSize);
    }
    return 0;
  }

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

