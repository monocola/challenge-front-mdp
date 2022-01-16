import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { port_backend } from '../publics/urls';
import { Order } from '../models/order.model';

const baseEndpointBackend = port_backend + '/api/v1/order';
const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get(`${baseEndpointBackend}/`, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  getOrderById(orderId: string): Observable<any> {
    return this.http.get(`${baseEndpointBackend}/${orderId}`, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post(`${baseEndpointBackend}`,order, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  completeOrder(orderId: string): Observable<any> {
    return this.http.put(`${baseEndpointBackend}/completada/${orderId}`, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  rejectOrder(orderId: string): Observable<any> {
    return this.http.put(`${baseEndpointBackend}/rechazada/${orderId}`, { headers: httpHeaders }).pipe(
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
