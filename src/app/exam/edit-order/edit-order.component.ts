import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  orderDetail:any;
  orderId1 = "ac1dd001-7e5d-1024-817e-5e27712e0002";
  constructor(public orderService: OrderServiceService) { }

  ngOnInit(): void {
   
    this.getOrderById(this.orderId1);
  }

  getOrderById(orderId: string){
    this.orderService.getOrderById(orderId).subscribe(data => {
      this.orderDetail = data;
      console.log(this.orderDetail);
    });
  }

}
