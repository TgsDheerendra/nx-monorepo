export type UserRole = 'admin' | 'user' | 'guest' | 'Developer';


import { Entity, PrimaryKey, Property } from '@mikro-orm/core';


@Entity()
export class UserEntity {
  @PrimaryKey()
  id!: string;

  @Property()
  name!: string;

  @Property()
  role?: UserRole;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
