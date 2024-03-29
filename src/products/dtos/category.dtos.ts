/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
//import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
