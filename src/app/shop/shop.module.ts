import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { AboutComponent } from './about/about.component';
import { HomeModule } from '../home/home.module';
import { ProductDetailsComponent } from './all-products/product-details/product-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    AllProductsComponent,
    AboutComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ]
})
export class ShopModule { }
