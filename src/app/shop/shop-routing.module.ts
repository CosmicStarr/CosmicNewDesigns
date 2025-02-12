import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './all-products/product-details/product-details.component';

const routes: Routes = [
  {path:'products',component:AllProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'details/:id',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
