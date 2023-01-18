import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ModulesModule } from './modules/modules.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [ModulesModule, ConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
