import {Injectable} from '@angular/core';
import {CheckoutData} from '../../entities/checkout-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {
  }

  public checkout(data: CheckoutData) {
    data.id = 11;
    return this.http.post<CheckoutData>(`http://localhost:3000/checkout`, data);
  }

  public getCheckout(id: number) {
    return this.http.get<CheckoutData>(`http://localhost:3000/checkout/${id}`);
  }
}
