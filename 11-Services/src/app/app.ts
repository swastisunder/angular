import { Component } from '@angular/core';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productData:
    | {
        name: string;
        brand: string;
      }[]
    | undefined = [];

  constructor(private productService: ProductService) {}

  getProductData() {
    this.productData = this.productService.getProductData();
  }
}
