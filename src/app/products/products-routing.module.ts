import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [{
  path: '',
  component: ProductsListComponent
}, {
  path: 'product/:id',
  component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {
}
