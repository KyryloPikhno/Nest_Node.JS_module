import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Car } from 'src/car/car.model';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-role.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Car, Role, UserRoles])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
