import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Order } from '../models/order.model';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  orderList:any;
  productSize: number;
  newOrderId: any;

  constructor(public orderService: OrderServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.orderService.getOrders().subscribe(data => {
      this.orderList = data;
      this.productSize = this.orderList.length;
      console.log(this.orderList);
    },(error: HttpErrorResponse) => {
      Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: true,
        showCancelButton: false,
        showConfirmButton: true,
        icon: 'error',
        title: '¡Lo Sentimos!',
        text: '¡En este momento no podemos mostrarle las órdenes!'
      }).then((resp) => {
      })
    });
  }

  createOrder(){

    const order: Order = {}

    Swal.fire({
      title: '¿Está seguro que desea crear una orden?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, correcto!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.createOrder(order).subscribe(
          (success) => {
            this.newOrderId = success.id;
            this.router.navigate(['/order/' + this.newOrderId ])
          });

        Swal.fire(
          'Orden Creada!',
          'La orden ha sido creada con éxito.',
          'success'
        )
      }
    })

    
  }

}
