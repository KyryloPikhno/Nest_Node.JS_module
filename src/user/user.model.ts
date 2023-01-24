import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({})
  id: string;

  @Column({})
  firstName: string;

  @Column({})
  surName: string;

  @Column({})
  age: number;

  @Column({})
  city: string;

  @Column({})
  isConfirm: boolean;

  @Column({})
  email: string;
}
