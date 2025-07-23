import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductService, ProductDto } from '@nx-monorepo/shared/index';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() dto: ProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<ProductDto>) {
    return this.productService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
