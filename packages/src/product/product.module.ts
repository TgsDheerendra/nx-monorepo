// packages/src/product/product.module.ts
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Product])],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductSharedModule {}
