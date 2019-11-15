import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductsFilterPipe} from './components/pipes/products-filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsSizeFilterPipe} from './components/pipes/products-size-filter.pipe';
import {CartComponent} from './components/cart/cart.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CheckoutComponent} from '../checkout/components/checkout/checkout.component';
import {ProductsFilterComponent} from './components/products-filter/products-filter.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ProductsListComponent, ProductsFilterComponent, ProductsFilterPipe, ProductsSizeFilterPipe, CartComponent, ProductDetailsComponent, CheckoutComponent],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})

export class ProductsModule {
}
