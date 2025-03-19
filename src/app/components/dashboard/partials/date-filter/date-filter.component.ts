import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'MMMM DD, YYYY',
  },
  display: {
    dateInput: 'MMMM DD, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'MMMM DD, YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-filter',
  imports: [MatFormFieldModule, MatDatepickerModule, MatIconModule],
  templateUrl: './date-filter.component.html',
  styleUrl: './date-filter.component.scss',
  providers: [provideMomentDateAdapter(MY_DATE_FORMATS),],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DateFilterComponent {

}
