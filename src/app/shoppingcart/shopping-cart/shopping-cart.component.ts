import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IShoppingCart, IShoppingCartItems } from 'src/app/models/shoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  ShoppingCart$:Observable<IShoppingCart>
  constructor(private shopService:ShoppingCartService) { }

  ngOnInit(): void {
    this.ShoppingCart$ = this.shopService.ShoppingCart$
  }

  removeItems(item:IShoppingCartItems){
    this.shopService.removeItem(item)
  }

  increment(item:IShoppingCartItems){
    this.shopService.increment(item)
  }

  decrement(item:IShoppingCartItems){
    this.shopService.decrement(item)
  }
}
