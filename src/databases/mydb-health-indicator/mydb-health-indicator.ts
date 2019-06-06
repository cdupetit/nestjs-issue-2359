import { HealthCheckError } from '@godaddy/terminus';
import { Inject, Injectable } from '@nestjs/common';
import { HealthIndicatorResult, HealthIndicator } from '@nestjs/terminus';
import { Connection, KNEX_CONNECTION } from '@willsoto/nestjs-objection';

@Injectable()
export class MyDbHealthIndicator extends HealthIndicator {
  constructor(@Inject(KNEX_CONNECTION) public connection: Connection) {
    super();
  }

  async pingCheck(key: string = 'db-primary'): Promise<HealthIndicatorResult> {
    try {
      await this.connection.raw('SELECT 1');
      return super.getStatus(key, true);
    } catch (error) {
      const status = super.getStatus(key, false, { message: error.message });
      throw new HealthCheckError('Unable to connect to database', status);
    }
  }
}
