import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetail } from 'src/app/models/orderDetail.model';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css'],
})
export class SelectProductsComponent implements OnInit {
  productList: any;
  selectAmount: any;
  id: string;
  constructor(
    public productService: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private orderDetailService: OrderDetailService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductList();
  }

 

  getProductList() {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
    });
  }

  selectproduct(productId: any, amount: any) {
    if (amount == null || amount == 'undefined' || amount <= 0) {
      this.showMessage('La cantidad no puede estar vacia y/o ser cero.');
    } else {
      const orderD: OrderDetail = {
        orderId: this.id,
        productId: productId,
        quantity: amount,
      };
      this.createProduct(orderD);
    }
  }

  back() {
    this.router.navigate(['/order/' + this.id]);
  }

  clean() {
   // window.location.reload();
  }

  showMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }

    createProduct(orderDetail: OrderDetail){
      this.orderDetailService.addProduct(orderDetail).subscribe(
        (success) => {
          Swal.fire({
            allowOutsideClick: false,
            allowEscapeKey: true,
            showCancelButton: true,
            showConfirmButton: true,
            icon: 'success',
            title: '¡Buen Trabajo!',
            text: '¡El producto ha sido agregado a la orden!'
          }).then((resp) => {
            this.router.navigate(['/order/' + this.id]);
          })
          
        }, (error: HttpErrorResponse) => {
          Swal.fire({
            allowOutsideClick: false,
            allowEscapeKey: true,
            showCancelButton: true,
            showConfirmButton: true,
            icon: 'error',
            title: '¡Lo Sentimos!',
            text: '¡El producto no ha sido agregado.'
          }).then((resp) => {
            //window.location.reload();
          })
        });
  }
}
