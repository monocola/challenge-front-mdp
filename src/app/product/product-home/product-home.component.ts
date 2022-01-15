import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
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
}
