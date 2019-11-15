import {Product} from './entities/Product';
import {Component} from '@angular/core';
import {ProductFilter} from './entities/product-filter';
import {CartService} from '../cart/cart.service';
import {ProductListService} from './product-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[];
  productsFilter: ProductFilter = null;

  constructor(private productListService: ProductListService, private cartService: CartService) {
    productListService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  setProductFilter(filter) {
    this.productsFilter = filter;
  }

  addToCart(item: Product) {
    this.cartService.addItem(item);
  }
}
