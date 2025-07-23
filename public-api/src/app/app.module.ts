import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from "@nx-monorepo/config/mikro-orm.config"
@Module({
  imports: [UserModule, ProductModule, MikroOrmModule.forRoot(mikroOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
