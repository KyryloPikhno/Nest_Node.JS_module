import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async getAll() {
    return await this.userRepository.findAll({});
  }

  async createUser(user: CreateUserDto) {
    return await this.userRepository.create(user);
  }
}
