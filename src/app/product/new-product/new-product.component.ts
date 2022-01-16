import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  selectNameProduct:string;
  selectCategoryName:string;
  selectUnityPrice:number;

  constructor(public productService: 
    ProductServiceService) { }

  

  ngOnInit(): void {
    
  }

  
  ngSubmit(){

    if(this.selectNameProduct == '' || this.selectNameProduct == null){
      this.showMessage("El nombre del producto no puede estar vacio.");
    }else if(this.selectCategoryName == '' || this.selectCategoryName == null){
      this.showMessage("La categoría no puede estar vacia.");
    }else if(this.selectUnityPrice <= 0 || this.selectUnityPrice == null){
      this.showMessage("El precio Unitario no puede estar vacio.");
    }
    else{

      const product:  Product = {
        name: this.selectNameProduct,
        categoryName: this.selectCategoryName,
        unityPrice: this.selectUnityPrice
  
      }
  
      this.createProduct(product);

    }

   
    
  }

  createProduct(product: Product){
    this.productService.createProduct(product).subscribe(
      (success) => {
        Swal.fire({
          allowOutsideClick: false,
          allowEscapeKey: true,
          showCancelButton: true,
          showConfirmButton: true,
          icon: 'success',
          title: '¡Buen Trabajo!',
          text: '¡El producto ha sido registrado con éxito!'
        }).then((resp) => {
          window.location.reload();
        })
        
      }, (error: HttpErrorResponse) => {
        Swal.fire({
          allowOutsideClick: false,
          allowEscapeKey: true,
          showCancelButton: true,
          showConfirmButton: true,
          icon: 'error',
          title: '¡Lo Sentimos!',
          text: '¡El producto no ha sido registrado.'
        }).then((resp) => {
          window.location.reload();
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
