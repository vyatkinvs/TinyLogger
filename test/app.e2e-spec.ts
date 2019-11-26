import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET => 400 (no query string))', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(400);
  });
  it('/ (GET => 400 (wrong query string))', () => {
    return request(app.getHttpServer())
      .get('/?name=qwer&token=asd')
      .expect(400);
  });
  it('/ (GET => 201 (query string is ok))', () => {
    return request(app.getHttpServer())
      .get('/?name=fromE2Etest&token=asdasdasdasd')
      .expect(201);
  });
  afterAll(async () => {
    await app.close();
  });
});
