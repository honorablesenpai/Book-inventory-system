import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from '../entities/school.entity';
import { CreateSchoolDto } from '../dtos/create-school.dto';
import { UpdateSchoolDto } from '../dtos/update-school.dto';

@Injectable()
export class SchoolService {
    constructor( @InjectRepository(School) private schoolRepository: Repository<School>, ) {}

    async create(createSchoolDto: CreateSchoolDto): Promise<School> {
        const school = this.schoolRepository.create(createSchoolDto);
        return await this.schoolRepository.save(school);
    }

    async findAll(): Promise<School[]> {
        return await this.schoolRepository.find();
    }

    async findOne(id: string): Promise<School> {
        const school = await this.schoolRepository.findOne({ where: { id } });
        if (!school) {
            throw new NotFoundException(`School with ID ${id} not found`);
        }
        return school;
    }

    async update(id: string, updateSchoolDto: UpdateSchoolDto): Promise<School> {
        const school = await this.findOne(id);
        Object.assign(school, updateSchoolDto);
        return await this.schoolRepository.save(school);
    }

    async remove(id: string): Promise<void> {
        const school = await this.findOne(id);
        await this.schoolRepository.remove(school);
    }

    async findByCity(city: string): Promise<School[]> {
        return await this.schoolRepository.find({ where: { city } });
    }
}
