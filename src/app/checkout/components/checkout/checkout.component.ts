import {Component} from '@angular/core';
import {Product} from '../../../products/components/products-list/entities/Product';
import {CartService} from '../../../products/components/cart/cart.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CheckoutData} from '../../entities/checkout-data';
import {CheckoutService} from './checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  products: Product[];
  userForm: FormGroup;
  checkOutInfo: CheckoutData = null;

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private checkoutService: CheckoutService) {

    this.userForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]]
    });
  }

  submit() {
    const form = this.userForm.getRawValue();
    const checkOut: CheckoutData = {
      products: this.cartService.items,
      fullName: form.fullName,
      email: form.email,
      street: form.street,
      cardNumber: form.cardNumber
    };

    return this.checkoutService.checkout(checkOut).subscribe(response => {
      this.checkOutInfo = response;
    });
  }
}
