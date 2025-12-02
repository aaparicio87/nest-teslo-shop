import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productServices: ProductsService) {}

  async runSeed() {
    await this.insertNewServices();
  }

  private async insertNewServices() {
    try {
      await this.productServices.deleteAllProducts();
      const products = initialData.products;
      const insertPromises = products.map((product) =>
        this.productServices.create(product),
      );
      await Promise.all(insertPromises);
    } catch (error: unknown) {
      console.error(error);
    }
  }
}
