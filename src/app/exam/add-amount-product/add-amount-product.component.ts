import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetail } from 'src/app/models/orderDetail.model';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-amount-product',
  templateUrl: './add-amount-product.component.html',
  styleUrls: ['./add-amount-product.component.css']
})
export class AddAmountProductComponent implements OnInit {

  selectAmount:number;
  visible:boolean = false;
  id:string;
  idO:string;
  product: any;
  selectNameProduct: string;
  selectCategoryName: string;
  selectUnityPrice: number;
  total:any;
  date: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    public productService: ProductServiceService,
    private orderDetailService: OrderDetailService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.idO = this.route.snapshot.paramMap.get('ido');
    this.getProductById(this.id);

  }

  updatePrice(){

    this.total = this.selectAmount * this.selectUnityPrice;
    if(this.selectAmount <= 0 || this.selectAmount == null){
      this.visible = false;
      this.total == 0;
    }else{
      this.visible = true;
    }


  }

  addProduct(){

    if (this.selectAmount == null || this.selectAmount <= 0) {
      this.showMessage('La cantidad no puede estar vacia y/o ser cero.');
    } else {

      const orderD: OrderDetail = {
        orderId: this.idO,
        productId: this.id,
        quantity: this.selectAmount,
      };
      this.createProduct(orderD);
    }

  }

  getProductById(productId: string) {
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
      this.selectNameProduct = data.name;
      this.selectCategoryName = data.categoryName;
      this.selectUnityPrice = data.unityPrice;
      this.date = data.createdAt;
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
          this.router.navigate(['/order/' + this.idO]);
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

  showMessage(message: string){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }


}
