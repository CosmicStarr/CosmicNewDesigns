import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {path:'',component:HeroComponent},
  {path:'user',loadChildren:()=> import('./user/user.module').then(mod => mod.UserModule)},
  {path:'shop',loadChildren:()=> import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path:'home',loadChildren:()=> import('./home/home.module').then(mod => mod.HomeModule)},
  {path:'shoppingcart',loadChildren:()=> import('./shoppingcart/shoppingcart.module').then(mod => mod.ShoppingcartModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
