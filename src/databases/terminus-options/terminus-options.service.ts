import { Injectable } from '@nestjs/common';
import { TerminusModuleOptions, TerminusEndpoint, TerminusOptionsFactory, MongooseHealthIndicator } from '@nestjs/terminus';
import { MyDbHealthIndicator } from '../mydb-health-indicator/mydb-health-indicator';

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(
    private readonly myDbHealthIndicator: MyDbHealthIndicator,
  ) {}

  public createTerminusOptions(): TerminusModuleOptions {
    const healthEndpoint: TerminusEndpoint = {
      url: '/health',
      healthIndicators: [
        async () => this.myDbHealthIndicator.pingCheck('myDb'),
      ],
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}
