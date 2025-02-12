import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IActualOrder, OrderedItem } from 'src/app/models/Orders';
import { StarrParams } from 'src/app/models/params';
import { IProducts } from 'src/app/models/products';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { EatagainComponent } from '../eatagain/eatagain.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  @ViewChild('Search',{static:true}) SearchBar:ElementRef
  order:IActualOrder[]
  // orderedItem:OrderedItem[]
  products:IProducts[]
  showMenu:string 
  sunParams = new StarrParams
  term:any
  sortOptions = [
    {name:'Last 30 days', value:'order30'},
    {name:'Past 3 months',value:'order3M'},
    {name:'Past 6 months',value:'order6M'}
  ]
  constructor(private orderService:OrdersService) { }
  ngOnInit(): void {
    this.getOrders()
    // this.getOrderedItems()
  }
  onSortSelected(sort:string){
    this.sunParams.sort = sort 
    this.getOrders()
    this.sunParams.sort = this.SearchBar.nativeElement.value
  }
  onSearch(){
    this.sunParams.search = this.SearchBar.nativeElement.value
    this.getOrders()
    this.SearchBar.nativeElement.value = ''
    this.term = ''
  }
  onReset(){
    this.SearchBar.nativeElement.value = ''
    this.term = ''
    this.sunParams = new StarrParams()
    this.getOrders()
  }
  getOrders(){
    this.orderService.getOrders(this.sunParams).subscribe((results:IActualOrder[])=>{
      this.order = results
    },error =>{
      console.log(error)
    })
  }
  toggleMenu(){
    this.showMenu = 'true'
    this.addStyle()
  }
  toggleMenu2(){
    this.showMenu = 'false'
    this.addStyle()
  }
  addStyle(){
    return {
      'color':'red'
    } 
  }

}
