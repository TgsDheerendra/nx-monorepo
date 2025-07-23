import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity, UserRole } from './user.entity';
import { UserNotFoundException } from './user.exception';

@Injectable()
export class UserService {
  private readonly users = [
    new UserEntity({ id: '1', name: 'Alice', role: 'admin' }),
    new UserEntity({ id: '2', name: 'Bob', role: 'admin' }),
  ];

  getUser(id: string): UserEntity {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new UserNotFoundException(id);
    return user;
  }

  getAllUsers(): UserEntity[] {
    return this.users;
  }

  findAll(): UserEntity[] {
    return this.users;
  }

  findById(id: string): UserEntity {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  hasAccess(user: UserEntity, roles: UserRole[]): boolean {
    return roles.includes(user.role as UserRole);
  }
}
