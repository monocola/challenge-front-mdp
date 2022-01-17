import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { OrderDetail } from 'src/app/models/orderDetail.model';

@Component({
  selector: 'app-edit-product-orderdetail',
  templateUrl: './edit-product-orderdetail.component.html',
  styleUrls: ['./edit-product-orderdetail.component.css'],
})
export class EditProductOrderdetailComponent implements OnInit {
  id: string;
  orderDetail: any;
  selectNameProduct: any;
  selectUnityPrice: any;
  selectAmount: any;
  selectDate: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderDetailService: OrderDetailService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOrderDetailById(this.id);
  }

  getOrderDetailById(orderDetailId: string) {
    this.orderDetailService.getOrderDetailById(orderDetailId).subscribe(
      (data) => {
        this.orderDetail = data;
        this.selectNameProduct = data.productName;
        this.selectUnityPrice = data.unityPrice;
        this.selectAmount = data.quantity;
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          allowOutsideClick: false,
          allowEscapeKey: true,
          showCancelButton: false,
          showConfirmButton: true,
          icon: 'error',
          title: '¡Lo Sentimos!',
          text: '¡El detalle de la orden no existe',
        }).then((resp) => {
          this.router.navigate(['/']);
        });
      }
    );
  }

  back() {
    this._location.back();
  }

  updateProduct() {
    if (this.selectAmount == null || this.selectAmount <= 0) {
      this.showMessage('La cantidad no puede estar vacia y/o ser cero.');
    } else {
      const orderD: OrderDetail = {
        id: this.id,
        quantity: this.selectAmount,
      };
      this.updateOrderProduct(orderD);
    }

  
  }

  updateOrderProduct(orderD: OrderDetail) {
    Swal.fire({
      title: '¿Está seguro que desea Actualizar el monto del producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderDetailService.updateProductOrderDetail(orderD).subscribe(
          (success) => {
            Swal.fire(
              'Completada!',
              '¡El monto ha sido actualizado!',
              'success'
            );
            this._location.back();
          },
          (error: HttpErrorResponse) => {
            if (error.status == 500) {
              Swal.fire({
                allowOutsideClick: false,
                allowEscapeKey: true,
                showCancelButton: true,
                showConfirmButton: true,
                icon: 'error',
                title: '¡Lo Sentimos!',
                text: '¡El monto no pudo se actualizado.',
              }).then((resp) => {});
            }
          }
        );
      }
    });
  }

  showMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }
}
