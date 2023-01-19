import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('user')
export class UserController {
  @Get()
  getAll() {
    return 'all users';
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return `U create new USER ${JSON.stringify(createUserDto)}`;
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return `user id: ${id}`;
  }

  @Put()
  updateUser() {}
}
