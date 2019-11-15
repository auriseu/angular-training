import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule {
}
