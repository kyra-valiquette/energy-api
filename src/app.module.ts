import { Module } from '@nestjs/common';
import { BuildingsModule } from './buildings/buildings.module.js';
import { HealthModule } from './health/health.module.js';
import { RoomsModule } from './rooms/rooms.module.js';


@Module({
  imports: [BuildingsModule, HealthModule, RoomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
