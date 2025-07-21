export type UserRole = 'admin' | 'user' | 'guest';

export class UserEntity {
  id!: string;
  name!: string;
  role!: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
