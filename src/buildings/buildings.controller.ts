import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { 
    ApiTags, 
    ApiOperation, 
    ApiParam, 
    ApiOkResponse, 
    ApiCreatedResponse, 
    ApiNotFoundResponse, 
    ApiBadRequestResponse,
    ApiResponse 
} from '@nestjs/swagger';
import { BuildingsService } from './buildings.service.js';
import { BuildingResponseDto } from './dto/building-response.dto.js';
import { CreateBuildingDto } from './dto/create-building.dto.js';
import { ProblemDetailsDto } from '../common/dto/problem-details.dto.js';

@ApiTags('Buildings')
@Controller({ path: 'buildings', version: '1' })
export class BuildingsController {
    constructor(private readonly buildingsService: BuildingsService) {}

    @Get()
    @ApiOperation({ summary: 'Lister tous les bâtiments', description: 'Récupère la collection complète.' })
    @ApiOkResponse({ description: 'Liste des bâtiments récupérée.', type: [BuildingResponseDto] })
    getBuildings(): BuildingResponseDto[] {
        return this.buildingsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Rechercher un bâtiment par ID' })
    @ApiParam({ name: 'id', description: 'Identifiant du bâtiment', type: 'number', example: 1 })
    @ApiOkResponse({ description: 'Bâtiment trouvé.', type: BuildingResponseDto })
    @ApiNotFoundResponse({ 
        description: 'Bâtiment introuvable.',
        type: ProblemDetailsDto 
    })
    getBuildingById(@Param('id', ParseIntPipe) id: number): BuildingResponseDto {
        return this.buildingsService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Créer un bâtiment' })
    @ApiCreatedResponse({ description: 'Bâtiment créé.', type: BuildingResponseDto })
    
    @ApiResponse({
        status: 400,
        description: 'Données de la requête invalides.',
        content: {
            'application/problem+json': {
                schema: { $ref: '#/components/schemas/ProblemDetailsDto' },
            },
        },
    })
    createBuilding(@Body() createBuildingDto: CreateBuildingDto): BuildingResponseDto {
        return this.buildingsService.addBuilding(createBuildingDto.name, createBuildingDto.city);
    }
}