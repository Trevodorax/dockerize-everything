import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { isAxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import { TvShowSummary } from './entities/tv-show-summary.entity';
import { TvShow } from './entities/tv-show.entity';

@Injectable()
export class TvShowsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<TvShowSummary[]> {
    const { data: tvShows } = await firstValueFrom(
      this.httpService.get('/shows'),
    );

    return tvShows.map((tvShow) => new TvShowSummary(tvShow));
  }

  async findOne(id: number): Promise<TvShow> {
    try {
      const { data: tvShow } = await firstValueFrom(
        this.httpService.get(`/shows/${id}`),
      );

      return new TvShow(tvShow);
    } catch (e) {
      if (isAxiosError(e) && e.response.status === 404) {
        throw new NotFoundException(`TV show with ID "${id}" does not exist.`);
      }
      throw e;
    }
  }
}
