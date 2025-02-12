import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { IProducts } from '../models/products';
import { IShoppingCart, IShoppingCartItems, IShoppingCartTotals, ShoppingCart } from '../models/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  baseUrl = environment.baseUrl
  private ShoppingCartSource = new BehaviorSubject<IShoppingCart>(null)
  ShoppingCart$ = this.ShoppingCartSource.asObservable()
  private ShoppingCartTotalSource = new BehaviorSubject<IShoppingCartTotals>(null)
  ShoppingCartTotal$ = this.ShoppingCartTotalSource.asObservable()
  tax = 8.75
  constructor(private http:HttpClient) { }
  createPaymentIntent(){
    return this.http.post(this.baseUrl +'Payment/'+this.cartValue().shopId,{}).
    pipe(
      map((Cart:IShoppingCart)=>{
        this.ShoppingCartSource.next(Cart)
      })
    )
  }
  cartValue(){
    return this.ShoppingCartSource.value;
  }
  getShoppingCart(Id:string){
    return this.http.get(this.baseUrl + 'ShoppingCart?id='+Id)
    .pipe(
      map((Cart?:IShoppingCart)=>{
        this.ShoppingCartSource.next(Cart)
        this.calcuateTotals()
      })
    )
  }
  private calcuateTotals(){
    const Cart = this.cartValue()
    const subTotal = Cart.shoppingCartItems.reduce((x,cartItem)=> (cartItem.price * cartItem.amount) + x,0)
    const tax = this.tax
    const total = tax + subTotal
    this.ShoppingCartTotalSource.next({tax,subTotal,total})
  }
  setShoppingCart(cart:IShoppingCart){
    return this.http.post<IShoppingCart>(this.baseUrl + 'ShoppingCart',cart).subscribe((results:IShoppingCart)=>{
      this.ShoppingCartSource.next(results)
      this.calcuateTotals()
    },error =>{
      console.log(error)
    })
  }
  addToCart(item:IProducts,amount = 1){
    const itemsToAdd:IShoppingCartItems = this.mappedCart(item,amount)
    const shoppingCart = this.cartValue() ?? this.createACart()
    shoppingCart.shoppingCartItems = this.addOrUpdateItems(shoppingCart.shoppingCartItems,itemsToAdd,amount)
    this.setShoppingCart(shoppingCart)
  }
  private addOrUpdateItems(Items: IShoppingCartItems[], itemToAdd: IShoppingCartItems, amount: number): IShoppingCartItems[] {
    const index = Items.findIndex(x => x.cartItemsId === itemToAdd.cartItemsId)
    if(index === -1){
      itemToAdd.amount = amount
      Items.push(itemToAdd)
    }else{
      Items[index].amount += amount
    }
    return Items
  }
  private createACart(): IShoppingCart {
    const Cart = new ShoppingCart()
    localStorage.setItem('ShoppingCart_id',Cart.shopId)
    return Cart;
  }
  private mappedCart(item: IProducts, amount: number): IShoppingCartItems {
    return{
      cartItemsId:item?.productsId,
      itemName:item?.name,
      description:item?.description,
      price:item?.price,
      amount,
      photoUrl:item?.photosDTO,
      category:item?.categoryDTO,
      brand:item?.brandDTO
    }
  }
  increment(item:IShoppingCartItems){
    const cart = this.cartValue()
    const objtoFind = cart.shoppingCartItems.findIndex(x =>x.cartItemsId === item.cartItemsId)
    cart.shoppingCartItems[objtoFind].amount++
    this.setShoppingCart(cart)
  }
  decrement(item:IShoppingCartItems){
    const cart = this.cartValue()
    const objtofind = cart.shoppingCartItems.findIndex(x => x.cartItemsId === item.cartItemsId)
    if(cart.shoppingCartItems[objtofind].amount > 1){
      cart.shoppingCartItems[objtofind].amount--;
      this.setShoppingCart(cart);
    }else{
      this.removeItem(item)
    }
  }
  removeItem(item: IShoppingCartItems) {
    const Cart = this.cartValue()
    if(Cart.shoppingCartItems.some(x => x.cartItemsId === item.cartItemsId)){
      Cart.shoppingCartItems = Cart.shoppingCartItems.filter(x => x.cartItemsId !== item.cartItemsId)
      if(Cart.shoppingCartItems.length > 0){
        this.setShoppingCart(Cart)
      }else{
        this.deleteCart(Cart)
      }  
    }
  }
  deletelocalCart(id:string){
    this.ShoppingCartSource.next(null)
    this.ShoppingCartTotalSource.next(null)
    localStorage.removeItem('ShoppingCart_id')
  }

  deleteCart(Cart: IShoppingCart) {
    return this.http.delete(this.baseUrl + 'ShoppingCart?Id='+ Cart.shopId).subscribe(()=>{
      this.ShoppingCartTotalSource.next(null)
      this.ShoppingCartSource.next(null)
      localStorage.removeItem('ShoppingCart_id')
    },error => {
      console.log(error)
    })
  }
}
