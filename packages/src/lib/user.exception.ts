import { ForbiddenException, NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor(id: string) {
    super(`User with ID ${id} not found`);
  }
}

export class RoleForbiddenException extends ForbiddenException {
  constructor(requiredRole: string) {
    super(`You do not have permission. Requires role: ${requiredRole}`);
  }
}

