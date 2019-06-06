import { Test, TestingModule } from '@nestjs/testing';
import { MyDbHealthIndicator } from './mydb-health-indicator';
import { KNEX_CONNECTION } from '@willsoto/nestjs-objection';

describe('MyDbHealthIndicator', () => {
  let service: MyDbHealthIndicator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MyDbHealthIndicator,
        { provide: KNEX_CONNECTION, useValue: {} },
      ],
    }).compile();

    service = module.get<MyDbHealthIndicator>(MyDbHealthIndicator);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
