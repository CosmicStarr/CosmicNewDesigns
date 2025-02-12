import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
    $(function(){
      var actuallyDrop = $(".dropdown5").hide()
      var stickyNav = $(".dropdown-show4")
      function slideInfo(){
        actuallyDrop.slideToggle("up")
      }
      stickyNav.on('click', slideInfo)
    })
  }

}
