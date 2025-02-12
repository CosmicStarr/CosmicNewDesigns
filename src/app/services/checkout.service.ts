import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IOrders } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.baseUrl
  constructor(private http:HttpClient) { }
  orderToCreateOrder(order:IOrders){
    return this.http.post(this.baseUrl + 'Order',order)
  }
}
