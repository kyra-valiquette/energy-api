import { ApiProperty } from '@nestjs/swagger';

export class BuildingResponseDto {
  @ApiProperty({ example: 1, description: 'Identifiant unique généré par le serveur' })
  id!: number;

  @ApiProperty({ example: 'Pavillon principal' })
  name!: string;

  @ApiProperty({ example: 'Montréal' })
  city!: string;

  @ApiProperty({ example: '2026-09-01T14:26:01Z', description: 'Date de création UTC' })
  createdAt!: Date;
}