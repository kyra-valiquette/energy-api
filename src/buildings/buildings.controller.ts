import { Controller, Get, Post, Body } from '@nestjs/common';
import { BuildingsService } from './buildings.service.js';
import { Building } from './entities/building.entity.js';
import { CreateBuildingDto } from './dto/create-building.dto.js';


@Controller('buildings')
export class BuildingsController {
    constructor(private readonly buildingsService : BuildingsService){}

    @Get()
    getBuildings(): Building[] {
        return this.buildingsService.findAll();
    }

    @Post()
    addBuilding(@Body() body: CreateBuildingDto){
        return this.buildingsService.addBuilding(body.name, body.address, body.yearBuilt);
    }

}
