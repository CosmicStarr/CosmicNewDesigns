import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IActualOrder, OrderedItem } from '../models/Orders';
import { StarrParams } from '../models/params';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.baseUrl

  constructor(private http:HttpClient) { }

  getOrders(sunParams?:StarrParams){
    let params = new HttpParams
    if(sunParams?.search)
    {
      params = params.append('Search',sunParams.search)
    }
    if(sunParams?.sort){
      params = params.append('sort', sunParams.sort)
    }
    return this.http.get<IActualOrder[]>(this.baseUrl + 'Order/OrderSort',{params})
  }
  // getOrderedItems(sunParams?:StarrParams){
  //   let params = new HttpParams
  //   if(sunParams?.search)
  //   {
  //     params = params.append('Search',sunParams.search)
  //   }
  //   return this.http.get<OrderedItem[]>(this.baseUrl + 'Order/OrderedProducts',{params})
  // }

}
