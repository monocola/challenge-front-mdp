import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  product: any;
  selectNameProduct: string;
  selectCategoryName: string;
  selectUnityPrice: number;
  date: string;


  constructor(
    private route: ActivatedRoute,
    public productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProductById(id);
  }

  getProductById(productId: string) {
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
      this.selectNameProduct = data.name;
      this.selectCategoryName = data.categoryName;
      this.selectUnityPrice = data.unityPrice;
      this.date = data.createdAt;
    },(error: HttpErrorResponse) => {
      Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: true,
        showCancelButton: false,
        showConfirmButton: true,
        icon: 'error',
        title: '¡Lo Sentimos!',
        text: '¡El producto no existe'
      }).then((resp) => {
        this.router.navigate(['/product']);
      })
    });
   
  }

  ngSubmit() {
    const product: Product = {
      id: this.route.snapshot.paramMap.get('id'),
      name: this.selectNameProduct,
      categoryName: this.selectCategoryName,
      unityPrice: this.selectUnityPrice,
    };

    this.updateProduct(product);
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(
      (success) => {
        Swal.fire({
          allowOutsideClick: false,
          allowEscapeKey: true,
          showCancelButton: true,
          showConfirmButton: true,
          icon: 'success',
          title: '¡Buen Trabajo!',
          text: '¡El producto ha sido actualizado con éxito!',
        }).then((resp) => {
          this.router.navigate(['/product'])
        });
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          allowOutsideClick: false,
          allowEscapeKey: true,
          showCancelButton: true,
          showConfirmButton: true,
          icon: 'error',
          title: '¡Lo Sentimos!',
          text: '¡El producto no ha sido actualizado.',
        }).then((resp) => {});
      }
    );
  }
}
