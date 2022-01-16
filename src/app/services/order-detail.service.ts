import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderDetail } from '../models/orderDetail.model';
import { port_backend } from '../publics/urls';

const baseEndpointBackend = port_backend + '/api/v1/orderdetail';
const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) { }

  addProduct(orderd: OrderDetail): Observable<any> {
    return this.http.post(`${baseEndpointBackend}`,orderd, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

}
