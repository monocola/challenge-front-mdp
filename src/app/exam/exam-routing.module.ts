import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { SelectProductsComponent } from './select-products/select-products.component';
import { AddAmountProductComponent } from './add-amount-product/add-amount-product.component';
import { EditProductOrderdetailComponent } from './edit-product-orderdetail/edit-product-orderdetail.component';

const routes: Routes = [
  {
    path: 'order',
    component: ExamComponent,
    children: [
      
      {
        path: ':id',
        component: EditOrderComponent,
      }
      ,
      {
        path: 'add-product/:id',
        component: SelectProductsComponent,
      }
      ,
      {
        path: 'add-product/amount/:id/:ido',
        component: AddAmountProductComponent,
      },
      {
        path: 'edit-product-order/:id',
        component: EditProductOrderdetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExamRoutingModule { }
