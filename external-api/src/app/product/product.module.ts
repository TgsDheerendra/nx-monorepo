import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductSharedModule } from '@nx-monorepo/shared/product/product.module';

@Module({
  imports: [ProductSharedModule],
  controllers: [ProductController],
})
export class ProductModule {}
