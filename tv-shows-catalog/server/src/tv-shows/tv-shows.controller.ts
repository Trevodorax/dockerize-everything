import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FindOneTvShowParams } from './dto/find-one-tv-show-params.dto';
import { TvShowSummary } from './entities/tv-show-summary.entity';
import { TvShow } from './entities/tv-show.entity';
import { TvShowsService } from './tv-shows.service';

@ApiTags('TV Shows')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('tv-shows')
export class TvShowsController {
  constructor(private readonly tvShowsService: TvShowsService) {}

  @ApiOkResponse({ description: 'List of TV shows.', type: [TvShowSummary] })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.' })
  @Get()
  findAll() {
    return this.tvShowsService.findAll();
  }

  @ApiOkResponse({ description: 'Details about a TV show.', type: TvShow })
  @ApiNotFoundResponse({ description: 'TV show does not exist.' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.' })
  @Get(':id')
  findOne(@Param() { id }: FindOneTvShowParams) {
    return this.tvShowsService.findOne(+id);
  }
}
