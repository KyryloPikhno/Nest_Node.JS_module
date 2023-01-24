import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'users' })
export class User extends Model<User> {
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
    allowNull: false,
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
}
