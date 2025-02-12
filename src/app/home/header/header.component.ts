import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IShoppingCart, IShoppingCartItems, IShoppingCartTotals } from 'src/app/models/shoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ShoppingCart$:Observable<IShoppingCart>
  ShoppingCartTotal$:Observable<IShoppingCartTotals>
  showMenu:boolean = false
  constructor(private ShoppingService:ShoppingCartService) { }

  ngOnInit(): void {
    $("document").ready(function(){
      var information = $("div").first().val()
      console.log(information)
      var navData = $(".nav-bar-list").data("test",{first:"Home",last:"Register"})
      var homeInfo = $('.nav-bar-list-link').first().text(navData.data("test").first)
      var regInfo = $('.nav-bar-list-link').last().text(navData.data("test").last)
      switch (regInfo.text()) {
        case "Register":
          console.log("Wonderful")
          break;
        case "register":
          console.log("yes!") 
          break; 
        default:
          console.log("Almost!")
          break;
      }
      if(homeInfo.text() == "Home"){

      }
    })

    
  
      // var hiddenElement = $(".dropdown")
      // $(".dropdown-show").on("click",function(event){
      //   hiddenElement.show();
      // })
        // $(".dropdown-show2").fadeOut(2000);
        // $(".dropdown-show2").fadeIn(2000);
        // $(".dropdown-show2").fadeTo(2000,0.8);
        // $(".justifyPlan").fadeToggle(2000);
        // $(".dropdown2").hide();
        // $(".dropdown-show2").click(function(){
        //   $(".dropdown2").slideToggle("slow");
        // });
 
    this.ShoppingCart$ = this.ShoppingService.ShoppingCart$
    this.ShoppingCartTotal$ = this.ShoppingService.ShoppingCartTotal$
  }

  removeItems(item:IShoppingCartItems){
    this.ShoppingService.removeItem(item)
  }
  toggleMenu(){
    this.showMenu = !this.showMenu
  }
}
