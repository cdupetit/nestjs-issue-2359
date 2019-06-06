import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './databases/databases.module';
import { ConfigModule } from './config/config.module';
import { TerminusOptionsService } from './databases/terminus-options/terminus-options.service';

@Module({
  imports: [
    DatabasesModule,
    ConfigModule,
    TerminusModule.forRootAsync({
      imports: [DatabasesModule],
      useExisting: TerminusOptionsService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
