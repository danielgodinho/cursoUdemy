import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { Course } from "./entities/courses.entity";
import { CreateCourseDTO } from "./dto/create-course.dto";
import { UpdateCourseDTO } from "./dto/update-couse.dto";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Post()
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.coursesService.create(createCourseDTO);
  }

  @Get("/:id")
  findOne(@Param("id") id: number) {
    return this.coursesService.findOne(+id);
  }

  @Put("put/:id")
  update(@Param("id") id: number, @Body() updateCourseDTO: any) {
    return this.coursesService.update(+id, updateCourseDTO);
  }

  @Delete("delete/:id")
  remove(@Param("id") id: number) {
    return this.coursesService.remove(+id);
  }
}
