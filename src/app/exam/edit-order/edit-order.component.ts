import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import Swal from 'sweetalert2';

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
    public productService: ProductServiceService,
    public orderDetailService: OrderDetailService,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
 
    this.getOrderById(this.id);
  }

  getOrderById(orderId: string){
    this.orderService.getOrderById(orderId).subscribe(data => {
      this.orderDetail = data;
      console.log(this.orderDetail);
      
    },(error: HttpErrorResponse) => {
      Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: true,
        showCancelButton: false,
        showConfirmButton: true,
        icon: 'error',
        title: '¡Lo Sentimos!',
        text: '¡La orden no existe'
      }).then((resp) => {
        this.router.navigate(['/']);
      })
    });
  }

  deleteProduct(orderDetailProductId:string){
    Swal.fire({
      title: '¿Está seguro que desea Eliminar el Producto de la Orden?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderDetailService.deleteProductToOrderDetail(orderDetailProductId).subscribe(
          (success) => {
            Swal.fire(
              'Eliminado!',
              'El producto ha sido eliminado de la orden!',
              'success'
            )
            this.getOrderById(this.id);
          },
          (error: HttpErrorResponse) => {
            if(error.status == 500){
              Swal.fire({
                allowOutsideClick: false,
                allowEscapeKey: true,
                showCancelButton: true,
                showConfirmButton: true,
                icon: 'error',
                title: '¡Lo Sentimos!',
                text: '¡El producto no ha sido eliminado de la orden.'
              }).then((resp) => {
               
              })
            }
           
          });
       
        
      }
      
    })
  }

  completeOrder(){
    Swal.fire({
      title: '¿Está seguro que desea dar por completada la Orden?',
      text: 'Una vez completada, no podrá ser editada.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.completeOrder(this.id).subscribe(
          (success) => {
            Swal.fire(
              'Completada!',
              'La orden a sido cambiada a completada!',
              'success'
            )
            this.getOrderById(this.id);
          },
          (error: HttpErrorResponse) => {
            if(error.status == 500){
              Swal.fire({
                allowOutsideClick: false,
                allowEscapeKey: true,
                showCancelButton: true,
                showConfirmButton: true,
                icon: 'error',
                title: '¡Lo Sentimos!',
                text: '¡La orden no ha podido se completada.'
              }).then((resp) => {
               
              })
            }
           
          });
       
        
      }
      
    })

  }


  rejeactOrder(){
    Swal.fire({
      title: '¿Está seguro que desea dar por rechazada la Orden?',
      text: 'Una vez rechazada, no podrá ser editada.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.rejectOrder(this.id).subscribe(
          (success) => {
            Swal.fire(
              'Rechazada!',
              'La orden a sido cambiada a rechazada!',
              'success'
            )
            this.getOrderById(this.id);
          },
          (error: HttpErrorResponse) => {
            if(error.status == 500){
              Swal.fire({
                allowOutsideClick: false,
                allowEscapeKey: true,
                showCancelButton: true,
                showConfirmButton: true,
                icon: 'error',
                title: '¡Lo Sentimos!',
                text: '¡La orden no ha podido se rechazada.'
              }).then((resp) => {
               
              })
            }
           
          });
       
        
      }
      
    })
  }

 

}
