import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

const objMySQLConf = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT) || 3306,
  database: process.env.MYSQL_DATABASE || 'test',
  user: process.env.MYSQL_USER || 'dev',
  password: process.env.MYSQL_PASSWORD || 'Liverpool1@&',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}']
};

console.log(objMySQLConf);

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
