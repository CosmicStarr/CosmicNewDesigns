import { Component, Input, OnInit } from '@angular/core';
import { IActualOrder } from 'src/app/models/Orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-eatagain',
  templateUrl: './eatagain.component.html',
  styleUrls: ['./eatagain.component.scss']
})
export class EatagainComponent implements OnInit {

  @Input()order:IActualOrder[]=[]

  constructor(private orderService:OrdersService) {}
  ngOnInit(): void {

  }




}
