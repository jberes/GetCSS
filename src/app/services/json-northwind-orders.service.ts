import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONNorthwindOrdersService {
  constructor(private http: HttpClient) { }

  public getOrders(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/6bfa9276-3d37-4d86-43f5-08da142f80b1`);
  }
}
