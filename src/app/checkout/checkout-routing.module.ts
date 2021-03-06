import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckoutComponent} from '../checkout/components/checkout/checkout.component';

const routes: Routes = [{
  path: 'checkout',
  component: CheckoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CheckoutRoutingModule {
}
