import { Module } from '@nestjs/common';
import { TvShowsModule } from './tv-shows/tv-shows.module';

@Module({
  imports: [TvShowsModule],
})
export class AppModule {}
