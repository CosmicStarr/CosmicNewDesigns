import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @ViewChild('lightId') lightId:ElementRef
  constructor() { }

  ngOnInit(): void {
    $("document").ready(function(){
        var dataInfo = $(".Date")
        var starrs = $(".primary-heading")
        console.log(starrs.val())
        dataInfo.blur(function(){
          if(dataInfo.val()){
            starrs.css("background-color","yellow")
            console.log(dataInfo.val())
          }else{
            return starrs.css("background-color","red")
          }
        $("a.btn--full").html("Here we go!")
        /*retrived the DOM class "hero-image-container" and took the first "img element"*/
        var galleryImages = $(".hero-image-container").find("img").first()
        // var HeroImages = $("p:first")
        // console.log(HeroImages.text())
        // console.log(HeroImages.html())
        //created an array of pics
        var images = [
          "../assets/Images/eggslunch.jpg",
          "../assets/Images/GrilledSalmon.jpg",
          "../assets/Images/AvacadoToast.jpg",
        ];
        /*-----picture gallery-----*/
        var index = 0;
        function clickingOnPics(){
            index = (index + 1)% images.length
            $(this).fadeOut(1200,function(){
              $(this).attr("src",images[index]).fadeIn(1200)
            })
        }
        galleryImages.on("click",clickingOnPics)
        console.log(clickingOnPics)
        //---------------key------callbackfunc!----key value pair---
        // galleryImages.data('ArrayImages',images)
        
        function lightImges(){
          galleryImages.on("click","light-box",function(){
            var info = $(this).attr("src")
            var img = $("<img>").attr("src",info)
            $(".light-box").find("img").empty().append(img).fadeIn(1500)
          })
        }
        setInterval(function(){
          index = (index + 1) % images.length; //0,1,2,0,1,2....
          galleryImages.fadeOut(1000,function(){
            $(this).attr("src",images[index]);
            $(this).fadeIn(1000);
            galleryImages.data("imgInfo",images)
            console.log(galleryImages.data("imgInfo"))
          });
        },2000);
        /*---------Handling Events-----------*/
  
        var btnHover = $(".btn--full")
        var humanPics = $(".human-Pics").find("img")
        //delegate.
        /*  The delegate below the comment is reacting to a click event.
        all "p" tags inside "hero-contaier" will slide up */
        var delegate = $(".hero-container").on("click","p", slideInfo)
        function slideInfo(){
          $(this).slideUp()
          delegate.append("<p> Perfect! You got this! </p>")
        }
        // btnHover.stop().mouseenter(function(event){
        //   $(this).stop().fadeTo(200,0.3)
        //   console.log(event)
        // })
        // btnHover.stop().mouseleave(function(event){
        //   $(this).stop().fadeTo(200,1)
        //   console.log(event)
        // }).click(function(event){
        //   alert("Get Ready!")
        //   console.log(event)
        // })
        // btnHover.stop().hover(function(){
        //   $(this).stop().text("Hovering!")
        // },function(){
        //   $(this).stop().text("Explore the Sun")
        // })
        // humanPics.on("click",function(event){
        //   console.log("im clicking")
        //   console.log(event)
        // })
        
        // $(".btn--full").click(function(event){
        //   console.log(event)
        // })
        
        // var attrbuteVal = $(".hero-img")
        // console.log(attrbuteVal.attr("src"))
        // $(".hero-img").hide();
        // $(".primary-heading").animate({
        //   "font-size":"-=6.2rem",
        //   "opacity":"0"
        // },2000)
        // $(".primary-heading").animate({
        //   "font-size":"+=6.2rem",
        //   "opacity":"1"
        // },1000)
        // $(".hero-img").delay(1000).slideDown(2000,function(){
        //   alert("you have arrived!")
        // })
      // $(function(){
      //   $("html").keydown(function(event){
      //     console.log(event.which)
      //   })
      // })
      })
    }) 
  }

}
