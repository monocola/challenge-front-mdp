import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.css']
})
export class SelectProductsComponent implements OnInit {

  productList:any;
  selectPrice:any;
  constructor(public productService: ProductServiceService) { }

  ngOnInit(): void {

    this.getProductList()
  }

  getProductList(){
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    });
  }

  selectProduct(productId:any, price:any){
    alert(productId + " " + price);
  }

}
