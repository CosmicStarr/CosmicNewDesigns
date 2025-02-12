import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartRoutingModule } from './shoppingcart-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeModule } from '../home/home.module';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ShoppingCartComponent,
    OrdersummaryComponent,
  ],
  imports: [
    CommonModule,
    ShoppingcartRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ShoppingcartModule { }
