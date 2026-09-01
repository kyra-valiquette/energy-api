import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
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

    @Get(':id')
    getBuildingById(@Param('id', ParseIntPipe) id: number): Building {
        return this.buildingsService.findOne(id);
    }

}
