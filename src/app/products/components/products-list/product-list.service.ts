import {Injectable} from '@angular/core';
import {Product} from './entities/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  constructor(private http: HttpClient) {
  }

  public getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public getProduct(id: number) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
