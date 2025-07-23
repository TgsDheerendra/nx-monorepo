import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports:[MikroOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
