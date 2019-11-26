import { Column, ObjectIdColumn } from 'typeorm';

export class LogEntity {
  @ObjectIdColumn()
  date: string;

  @Column('text')
  pluginName: string;

  @Column('text')
  token: string;
}
