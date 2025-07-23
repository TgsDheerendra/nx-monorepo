// external-api/src/app/user/user.controller.ts
import { Controller, Get, Headers, Param } from '@nestjs/common';
import {
  UserEntity,
  UserService,
  RoleForbiddenException,
  UserNotFoundException,
  getUserFromAuthHeader
} from '@nx-monorepo/shared/index';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Headers('Authorization') auth: string): UserEntity[] {
    const user = getUserFromAuthHeader(auth);

    if (!this.userService.hasAccess(user, ['admin'])) {
      throw new RoleForbiddenException('admin');
    }

    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserEntity {
    const user = this.userService.findById(id);

    if (!user) {
      throw new UserNotFoundException(id);
    }

    return user;
  }
}
