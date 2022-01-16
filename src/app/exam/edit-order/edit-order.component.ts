import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  orderDetail:any;
  productList:any;
  id:string;
  constructor(public orderService: OrderServiceService, 
    private route: ActivatedRoute,
    public productService: ProductServiceService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
 
    this.getOrderById(this.id);
  }

  getOrderById(orderId: string){
    this.orderService.getOrderById(orderId).subscribe(data => {
      this.orderDetail = data;
      console.log(this.orderDetail);
    });
  }

 

}
