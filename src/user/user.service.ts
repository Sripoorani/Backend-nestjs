import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
    async  readAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
    async update(user: User): Promise<UpdateResult> {

        return await this.userRepository.update(user.user_id,user);
    }
}
