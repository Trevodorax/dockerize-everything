import { Test, TestingModule } from '@nestjs/testing';
import { TvShowsController } from './tv-shows.controller';
import { TvShowsService } from './tv-shows.service';

describe('TvShowsController', () => {
  let controller: TvShowsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TvShowsController],
      providers: [TvShowsService],
    }).compile();

    controller = module.get<TvShowsController>(TvShowsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
