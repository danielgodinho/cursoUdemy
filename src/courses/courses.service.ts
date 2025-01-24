import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-couse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private readonly courseRepository:Repository<Course>,
    ){}

    private courses:Course[] = [
        {
            id:1,
            name:"Curso de Node",
            description:"Curso de NodeJs",
            tags:["node","javascript"]
        }
    ];

    async findAll(){
        return  await this.courseRepository.find();
    }

    findOne(id:number){
        const course =  this.courses.find(courses => courses.id === id);
        
        if(!course){
            throw new HttpException(`Course with id ${id} not found`, HttpStatus.NOT_FOUND);
        }else{
            return course;
        }
    }

    create(course:Course){
        this.courses.push(course);
        return course;
    }

    update(id:number,updateCourseDTO:any){
        const existe  = this.findOne(id);
        if(existe as any ){
                
            const index = this.courses.findIndex(course => course.id === id);
            existe[index] = [id, ...updateCourseDTO];
        }
    }

    remove(id:number){
        const index = this.courses.findIndex(course => course.id === id);
        if(index >= 0)
        this.courses.splice(index,1);
    }
}
