import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Product} from '../products-list/entities/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.cartService.setItems(this.items);
  }

  remove(item: Product) {
    this.cartService.removeItem(item);
    this.items = this.cartService.items;
  }

  clear() {
    this.cartService.clearItems();
    this.items = this.cartService.items;
  }

  checkout() {
    this.router.navigate(['checkout']);
  }
}
