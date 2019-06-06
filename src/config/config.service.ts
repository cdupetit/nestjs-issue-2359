import { Injectable } from '@nestjs/common';
import * as knex from 'knex';

@Injectable()
export class ConfigService {
  get myDbConfig(): knex.Config {
    const config: knex.Config = {
      client: 'mysql2',
      connection: {
        host: 'localhost',
        port: 3306,
        user: 'dbUser',
        password: 'xxxx',
        database: 'myDb',
        timezone: 'UTC',
      },
      useNullAsDefault: true,
    };
    return config;
  }
}
