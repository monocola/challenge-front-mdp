import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EditOrderComponent } from './exam/edit-order/edit-order.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashBoardComponent,
    children: [],
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
