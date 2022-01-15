import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  declarations: [ProductComponent, ProductHomeComponent, ProductDetailComponent, NewProductComponent]
})
export class ProductModule { }
