import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TvShowsController } from './tv-shows.controller';
import { TvShowsService } from './tv-shows.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.tvmaze.com',
      timeout: 10000,
    }),
  ],
  controllers: [TvShowsController],
  providers: [TvShowsService],
})
export class TvShowsModule {}
