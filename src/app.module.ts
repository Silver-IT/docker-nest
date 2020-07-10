import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

const objMySQLConf = {
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT) || 3306,
  database: process.env.MYSQL_DATABASE || 'test',
  username: process.env.MYSQL_USERNAME || 'dev',
  password: process.env.MYSQL_PASSWORD || 'Liverpool1@&',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}']
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      ...objMySQLConf
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
