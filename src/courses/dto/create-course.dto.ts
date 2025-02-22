import { IsNumber, IsString  } from "class-validator";

export class CreateCourseDTO { 
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString({ each: true })  
  readonly tags: string[];
}