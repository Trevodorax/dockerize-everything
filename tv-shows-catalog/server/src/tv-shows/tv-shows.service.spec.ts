import { Test, TestingModule } from '@nestjs/testing';
import { TvShowsService } from './tv-shows.service';

describe('TvShowsService', () => {
  let service: TvShowsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TvShowsService],
    }).compile();

    service = module.get<TvShowsService>(TvShowsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
