import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Partner {
  id: number;
  partnerName: string;
  partnerType: string;
  conversions: number;
  commissions: number;
  grosssales: number;
  contract: string;
}

@Injectable({providedIn: 'root'})

export class DashboardService {

  private apiUrl = 'https://mockanapi.com/s/67ae1b3403f9ffca6f47eb79/partners?mock_delay=5000';

  constructor(private http: HttpClient) {}

  getPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.apiUrl).pipe(
      map((response: any) => {
         // Convert object values to an array
        return Object.values(response);
      })
    );
  }
}
