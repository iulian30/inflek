import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PartnerComponent } from './components/partner/partner.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'partners', component: PartnerComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];
