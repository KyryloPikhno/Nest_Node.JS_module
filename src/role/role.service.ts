import { Injectable } from '@nestjs/common';
import { Role } from './role.model';
import { RoleDto } from './dto/role.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleRepository: typeof Role,
  ) {}

  async getRole(value: string) {
    return this.roleRepository.findOne({ where: { value } });
  }

  async getRoles() {
    return this.roleRepository.findAll();
  }

  async createRole(dto: RoleDto) {
    return this.roleRepository.create(dto);
  }
}
