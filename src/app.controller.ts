import { Controller, Get, Logger, Query, Res } from '@nestjs/common';
import { LogEntity } from './entities/log.entity';
import { MongoEntityManager } from 'typeorm';
import { validate } from 'class-validator';
import { InjectEntityManager } from '@nestjs/typeorm';

@Controller()
export class AppController {

  constructor(@InjectEntityManager() private readonly manager: MongoEntityManager) {
  }

  @Get()
  async log(@Res() response, @Query() pluginData) {
    // Logger.warn(`Query is - ${JSON.stringify(pluginData)}`);
    const logEntry: LogEntity = new LogEntity(pluginData.name, pluginData.token);
    const errors = await validate(logEntry);
    // Logger.warn(`Validate errors - ${JSON.stringify(errors)}`);
    if (errors.length === 0) {
      try {
        await this.manager.save(logEntry);
        Logger.warn(`New log entry was saved - ${JSON.stringify(logEntry)}`);
        response.status(201).send();
      } catch (e) {
        response.status(500).send();
      }
    }
    response.status(400).send();
  }
}
