import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserModule as SharedUserModule } from '@nx-monorepo/package-user';


@Module({
  imports: [SharedUserModule],
  controllers: [UserController],
})
export class UserModule {}
