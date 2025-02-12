import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //   $(function (){
    //     $(".plan").fadeOut(2000);
    //     $(".plan").fadeIn(2000);
    //     $(".plan").fadeTo(2000,0.8);
    //     // $(".justifyPlan").fadeToggle(2000);
    //     $(".plan").click(function(){
    //       $(".best-Plan").slideToggle("slow");
    //     });
    // });
  }

}
