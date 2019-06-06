import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { MongooseModule } from '@nestjs/mongoose';
import { ObjectionModule } from '@willsoto/nestjs-objection';

import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

import { MyDbHealthIndicator } from './mydb-health-indicator/mydb-health-indicator';
import { TerminusOptionsService } from './terminus-options/terminus-options.service';

@Module({
  imports: [
    TerminusModule,
    ObjectionModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({ config: config.myDbConfig }),
    }),
  ],
  providers: [
    TerminusOptionsService,
    MyDbHealthIndicator,
  ],
  exports: [
    TerminusOptionsService,
    ObjectionModule,
  ],
})
export class DatabasesModule {}
