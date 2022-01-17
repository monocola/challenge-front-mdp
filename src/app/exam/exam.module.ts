import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { FormsModule } from '@angular/forms';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { AddAmountProductComponent } from './add-amount-product/add-amount-product.component';
import { EditProductOrderdetailComponent } from './edit-product-orderdetail/edit-product-orderdetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExamRoutingModule
  ],
  declarations: [ExamComponent,  EditOrderComponent, SelectProductsComponent, AddAmountProductComponent, EditProductOrderdetailComponent]
})
export class ExamModule { }
