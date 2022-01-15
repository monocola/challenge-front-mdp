import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamModule } from './exam/exam.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundService } from './services/not-found.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuNavComponent } from './menu/menu-nav/menu-nav.component';
import { NewProductComponent } from './product/new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashBoardComponent,
    MenuNavComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductRoutingModule,
    ExamModule,
    ProductModule,
    // the root routing module must on the end of this array
    AppRoutingModule
  ],
  providers: [NotFoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
