import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { ConfigModule } from '../config/config.module';
import { Users } from './users/users';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelsModule } from './travels/travels.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Users],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    TravelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
