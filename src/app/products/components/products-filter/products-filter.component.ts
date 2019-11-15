import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductFilter} from '../products-list/entities/product-filter';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent {

  @Input() nameTerm = '';
  @Input() productSize = null;

  @Output() filterChange = new EventEmitter<ProductFilter>();

  triggerChange() {
    this.filterChange.emit({
      productName: this.nameTerm,
      productSize: this.productSize
    });
  }
}
