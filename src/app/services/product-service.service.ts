import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { port_backend } from '../publics/urls';
import { Product } from '../models/product.model';
import Swal from 'sweetalert2';

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

  createProduct(product: Product): Observable<any> {
    return this.http.post(`${baseEndpointBackend}`,product, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 404) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  deleteProductById(productId: string): Observable<any> {
    return this.http.delete(`${baseEndpointBackend}/${productId}`, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 500) {
          
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get(`${baseEndpointBackend}/${productId}`, { headers: httpHeaders }).pipe(
      catchError(e => {
        return throwError(e);
        if (e.status == 500) {
          
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${baseEndpointBackend}`,product, { headers: httpHeaders }).pipe(
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
