import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, IsNumber, Min, Max } from 'class-validator';

export class CreateBuildingDto {
  @ApiProperty({
    description: 'Nom public et unique du bâtiment',
    example: 'Pavillon principal',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @ApiProperty({
    description: 'Ville du batiment',
    example: 'Montréal',
  })
  @IsString()
  @IsNotEmpty()
  city!: string;
}