import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {User} from "./user.model";

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @ApiResponse({ status: 201, type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @ApiQuery({ name: 'id', example: 'rekkfg-2324' })
  @Get('/:id')
  getById(@Param('id') id: string) {
    return `user id: ${id}`;
  }

  @Put('/:id')
  updateUser() {}
}
