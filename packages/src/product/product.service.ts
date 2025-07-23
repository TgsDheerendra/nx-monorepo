import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly em: EntityManager) {}

  async create(dto: ProductDto) {
    const product = this.em.create(Product, {
      ...dto,
      inStock: dto.inStock ?? true, // ensure default
    });
    await this.em.persistAndFlush(product);
    return product;
  }

  async findAll() {
    return this.em.find(Product, {});
  }

  async findOne(id: number) {
    const product = await this.em.findOne(Product, { id });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: number, dto: Partial<ProductDto>) {
    const product = await this.findOne(id);
    this.em.assign(product, dto);
    await this.em.flush();
    return product;
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.em.removeAndFlush(product);
  }
}
