import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('product service');
  }

  getProductData() {
    return [
      { name: 'mobile', brand: 'samsung' },
      { name: 'imax', brand: 'imax' },
    ];
  }
}
