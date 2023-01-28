import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Tatiana',
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({
    example: 'Popko',
    required: false,
  })
  @IsString()
  @Length(2)
  @IsNotEmpty()
  surName: string;

  @ApiProperty({
    example: 'female',
    required: true,
  })
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty({
    example: 'mr.good@i.ua',
    required: true,
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 16,
    required: false,
  })
  @IsNumber()
  @Min(16)
  age: number;

  @ApiProperty({
    example: 'Mariupol',
    required: false,
  })
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty({
    example: false,
    required: false,
  })
  @IsBoolean()
  isConfirm: boolean;

  @ApiProperty({
    example: 'password1234',
    required: true,
  })
  @IsString()
  password: string;
}
