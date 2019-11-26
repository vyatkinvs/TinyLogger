import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { IsDate, Length, MaxLength } from 'class-validator';

@Entity()
export class LogEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  date: string = Date();

  @Column('text')
  @Length(1, 30)
  pluginName: string;

  @Column('text')
  @Length(1, 70)
  token: string;

  constructor(pluginName: string, token: string) {
    this.pluginName = pluginName;
    this.token = token;
  }
}
