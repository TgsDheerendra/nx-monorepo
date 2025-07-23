import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Product {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  price!: number;

  @Property({ default: true })
  inStock = true;

  @Property({ onCreate: () => new Date() })
  createdAt?: Date = new Date();

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt?: Date;
}
