import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamComponent } from './exam.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

const routes: Routes = [
  {
    path: 'order',
    component: ExamComponent,
    children: [
      {
        path: 'new',
        component: NewOrderComponent,
        pathMatch: 'full'
      },
      {
        path: 'detail',
        component: ExamDetailComponent
      },
      {
        path: ':id',
        component: EditOrderComponent,
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
