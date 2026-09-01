import { Injectable } from '@nestjs/common';
import { Building } from './entities/building.entity.js';

@Injectable()
export class BuildingsService {
    private readonly buildings: Building[] = [];

    findAll(): Building[]{
        return this.buildings;
    }

    addBuilding(name: string, address: string, yearBuilt: number) {
        const building = new Building({
          id: this.buildings.length + 1,
          name,
          address,
          yearBuilt
        });
        this.buildings.push(building);
        return building;
      }

}
