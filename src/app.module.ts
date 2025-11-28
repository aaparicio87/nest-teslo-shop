import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from './config/env.config';
import { JoiValidaitonSchema } from './config/joi.validation';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      validationSchema: JoiValidaitonSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
