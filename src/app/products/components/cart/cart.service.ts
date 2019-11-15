import {Injectable} from '@angular/core';
import {Product} from '../products-list/entities/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[];

  addItem(item: Product) {
    this.items.push({...item});
  }

  clearItems() {
    this.items = [];
  }

  removeItem(itemToRemove: Product) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }

  setItems(items: Product[]) {
    this.items = items;
  }
}
