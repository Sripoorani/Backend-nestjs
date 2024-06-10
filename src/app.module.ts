import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [ 
    
    TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'userinfo',
    username: 'root',
    password: 'sripoorani@22L',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([User]),
    ],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
