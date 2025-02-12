import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CosmicDesigns';

  constructor(private Cart:ShoppingCartService){}
  ngOnInit(): void {
    const CartId = localStorage.getItem('ShoppingCart_id');
    if(CartId){
      this.Cart.getShoppingCart(CartId).subscribe(()=>{
        console.log('Initialized Shopping Cart!')
      },error =>{
        console.log(error)
      })
    }

     /*------keydown------*/


  }
}




