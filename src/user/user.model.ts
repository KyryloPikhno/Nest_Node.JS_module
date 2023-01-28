import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Car } from '../car/car.model';
import { Role } from '../role/role.model';
import { UserRoles } from '../role/user-role.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Kirill',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName: string;
  @ApiProperty({
    example: 'Pikhno',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surName: string;

  @ApiProperty({
    example: 'male',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gender: string;

  @ApiProperty({
    example: 25,
    required: true,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ApiProperty({
    example: 'Mariupol',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  city: string;

  @ApiProperty({
    example: false,
    required: true,
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  isConfirm: boolean;

  @ApiProperty({
    example: 'MR.GOOD@i.ua',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Car)
  cars: Car[];

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
