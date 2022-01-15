import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  orderList:any;
  productSize: number;

  constructor(public orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.orderService.getOrders().subscribe(data => {
      this.orderList = data;
      this.productSize = this.orderList.length;
      console.log(this.orderList);
    });
  }

}
