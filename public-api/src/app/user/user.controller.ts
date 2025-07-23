import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {
  UserService,
  CreateUserDto,
  formatUser
} from '@nx-monorepo/shared/index';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    const user = this.userService.getUser(id);
    return formatUser(user);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers().map(formatUser);
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return {
      message: `Simulated user creation for ${dto.name}`,
    };
  }
}
