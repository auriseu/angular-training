import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductListService} from '../components/products-list/product-list.service';
import {Observable} from 'rxjs';
import {Product} from '../components/products-list/entities/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private activatedRoute: ActivatedRoute, private productListService: ProductListService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.product$ = this.productListService.getProduct(+param.get('id'));
    });
  }
}
