import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class FindOneTvShowParams {
  @ApiProperty({
    description: 'The ID of the requested TV show.',
    example: 1,
    minimum: 1,
    type: Number,
  })
  @IsNumberString()
  id: number;
}
