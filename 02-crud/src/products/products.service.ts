import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products = [];

  create(product) {
    return this.products;
  }
}
