import { Options } from '@mikro-orm/core';
import { Product, UserEntity } from '../src/index';
import { MySqlDriver } from '@mikro-orm/mysql';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Options = {
  driver: MySqlDriver,
  host: process.env.DB_HOST,
  port: + process.env.DB_PORT!,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  entities: [Product, UserEntity], 
  entitiesTs: ['packages/src/**/*.entity.ts'],
  debug: true,
};


console.log('Connecting to MySQL:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  dbName: process.env.DB_NAME,
});
export default config;
