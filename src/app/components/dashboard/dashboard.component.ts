import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {ContentTableComponent} from './partials/content-table/content-table.component';
import {DateFilterComponent} from './partials/date-filter/date-filter.component';
import {ActionButtonsComponent} from './partials/action-buttons/action-buttons.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    ContentTableComponent,
    DateFilterComponent,
    ActionButtonsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
