import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../products-list/entities/Product';
import {ProductFilter} from '../products-list/entities/product-filter';

@Pipe({
  name: 'productsSizeFilter'
})
export class ProductsSizeFilterPipe implements PipeTransform {

  transform(products: Product[], filter: ProductFilter): Product[] {
    if (filter === null || filter.productSize === null) {
      return products;
    }

    return products.filter(prod => {
      return prod.size === filter.productSize;
    });
  }

}
