import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4, { message: 'The ming length of category name is 4 characters' })
  @MaxLength(12, {
    message: 'The max length of category name is 12 characters',
  })
  readonly categoryName: string;

  
  @ApiProperty({type:'string',format:'binary'})
  image: string
}