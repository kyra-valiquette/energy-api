import { Injectable, NotFoundException} from '@nestjs/common';
import { Building } from './entities/building.entity.js';

@Injectable()
export class BuildingsService {
    private readonly buildings: Building[] = [];

    findAll(): Building[]{
        return this.buildings;
    }

    findOne(id: number): Building {
        const building = this.buildings.find((b) => b.id === id);
        
        if (!building) {
            throw new NotFoundException(`Le bâtiment avec l'ID ${id} est introuvable.`);
        }
        
        return building;
    }

    addBuilding(name: string, city: string) {
        const building = new Building({
          id: this.buildings.length + 1,
          name,
          city
        });
        this.buildings.push(building);
        return building;
      }

}
