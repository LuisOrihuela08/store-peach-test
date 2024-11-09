import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../index-model';

@Injectable({
  providedIn: 'root'
})
export class ListarProductoService {

  private url = environment.API_URL;

  constructor(private http : HttpClient) { }

  listarProducto() : Observable<Product[]> {
    return this.http.get<Product[]> (this.url + '/v1/products');
  }
}
