import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
  providers: [FormBuilder]
})
export class ProductHomeComponent implements OnInit {

  productList:any;
  productSize: number;

  constructor(public productService: ProductServiceService) { }

  ngOnInit(): void {
    this.getProductList();
  }

 
  getProductList(){
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
      this.productSize = this.productList.length;
      console.log(this.productList);
    });
  }

  deleteProduct(productId: string){
    Swal.fire({
      title: '¿Está seguro que desea Eliminar el Producto?',
      text: "Solo podrá eliminar productos que no se encuentren asociados a una orden!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductById(productId).subscribe(
          (success) => {
           
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
                text: '¡El producto está asociado a una orden'
              }).then((resp) => {
                window.location.reload();
              })
            }
           
          });
        Swal.fire(
          'Eliminado!',
          'El producto ha sido eliminado',
          'success'
        )
        
      }
      
    })
  }
}
