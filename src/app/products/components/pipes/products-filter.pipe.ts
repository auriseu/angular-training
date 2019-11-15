import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products-list/entities/Product';
import {ProductFilter} from '../products-list/entities/product-filter';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: Product[], filter: ProductFilter): Product[] {
    if (filter === null || filter.productName === null && filter.productName.length === 0) {
      return products;
    }

    return products.filter(prod => {
      return prod.name.toLowerCase().includes(filter.productName.toLowerCase());
    });
  }
}
