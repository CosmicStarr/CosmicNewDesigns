import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IShoppingCart, IShoppingCartTotals } from 'src/app/models/shoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.scss']
})
export class OrdersummaryComponent implements OnInit {

  ShoppingCart$:Observable<IShoppingCart>
  ShoppingCartTotal$:Observable<IShoppingCartTotals>
  constructor(private shopService:ShoppingCartService) { }

  ngOnInit(): void {
    this.ShoppingCartTotal$ = this.shopService.ShoppingCartTotal$
    this.ShoppingCart$ = this.shopService.ShoppingCart$
  }

}
