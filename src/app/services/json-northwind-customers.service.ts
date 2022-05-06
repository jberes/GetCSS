import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONNorthwindCustomersService {
  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/a876482a-7805-4e41-6c8a-08da1411ad26`);
  }
}
