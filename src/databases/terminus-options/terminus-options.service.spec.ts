import { Test, TestingModule } from '@nestjs/testing';

import { TerminusOptionsService } from './terminus-options.service';
import { MyDbHealthIndicator } from '../mydb-health-indicator/mydb-health-indicator';

describe('TerminusOptionsService', () => {
  let service: TerminusOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TerminusOptionsService,
        { provide: MyDbHealthIndicator, useValue: {} },
      ],
    }).compile();

    service = module.get<TerminusOptionsService>(TerminusOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
