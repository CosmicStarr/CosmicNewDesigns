import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 products:IProducts
 id:number
 amount = 1
  constructor(private productService:ProductsService,private router:ActivatedRoute,private cartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.router.params.subscribe((results:Params)=>{
      this.id = +results['id']
      this.loadProduct()
      console.log(results)
    },error =>{
      console.log(error)
    })
  }

  loadProduct(){
    this.productService.getProduct(+this.router.snapshot.paramMap.get('id')).subscribe((results)=>{
      this.products = results
      console.log(results)
    },error =>{
      console.log(error)
    })
  }
  addtoCart(){
    this.cartService.addToCart(this.products,this.amount)
  }
  increment(){
    this.amount++
  }
  decrement(){
    if(this.amount > 1){
      this.amount--
    }
  }
 
}
