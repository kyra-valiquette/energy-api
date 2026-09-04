import { Module } from '@nestjs/common';
import { BuildingsModule } from './buildings/buildings.module.js';
import { HealthModule } from './health/health.module.js';


@Module({
  imports: [BuildingsModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
