import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { port_backend } from '../publics/urls';

const baseEndpointBackend = port_backend + '/api/v1/product';
const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${baseEndpointBackend}`, { headers: httpHeaders }).pipe(
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
