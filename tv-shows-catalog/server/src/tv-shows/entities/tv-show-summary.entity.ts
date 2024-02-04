import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import slugify from 'slugify';
import { TvShow } from './tv-show.entity';

@Exclude()
export class TvShowSummary {
  constructor(partial: Partial<TvShow>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'The ID of the TV show',
    example: 1,
    minimum: 1,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: 'The name of the TV show',
    example: 'Under the Dome',
  })
  @Expose()
  name: string;

  @ApiProperty({
    description: 'The slug of the TV show',
    example: 'under-the-dome',
  })
  @Expose()
  get slug(): string {
    return slugify(this.name, { lower: true, strict: true });
  }

  @ApiProperty({
    description: 'The genres of the TV show',
    example: ['Drama', 'Science-Fiction', 'Thriller'],
  })
  @Expose()
  genres: string[];

  @ApiProperty({
    description: "The average watchers' rating of the TV show",
    example: 4.5,
    minimum: 1,
    maximum: 10,
  })
  @Expose()
  rating: {
    average: number;
  };

  @ApiProperty({
    description:
      'The available images for TV shows. Can be in "medium" or "original" format.',
    example:
      'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
  })
  @Expose()
  image: {
    medium: string;
  };
}
