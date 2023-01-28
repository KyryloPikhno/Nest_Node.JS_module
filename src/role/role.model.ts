import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'user',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  value: string;

  @ApiProperty({
    example: 'desc',
    required: true,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;
}
