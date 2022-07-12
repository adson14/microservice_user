import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './interfaces/user.interface';
import { Repository } from 'typeorm';
import { UserEntity } from './interfaces/user.entity';

@Injectable()
export class AppService {

    constructor(
        @InjectRepository(UserEntity) 
        private userRepository: Repository<UserEntity>)
    {

    }

    private users: User[] = [];

    async create(user: User): Promise<UserEntity>{
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<UserEntity[]>{
        return await  this.userRepository.find();
    }
}
