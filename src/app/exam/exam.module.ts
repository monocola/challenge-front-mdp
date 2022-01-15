import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { FormsModule } from '@angular/forms';
import { NewOrderComponent } from './new-order/new-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExamRoutingModule
  ],
  declarations: [ExamComponent, ExamDetailComponent, ExamListComponent, NewOrderComponent, EditOrderComponent]
})
export class ExamModule { }
