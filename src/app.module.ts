import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BedsModule } from './beds/beds.module';
import { ServicesModule } from './services/services.module';
import { CommonModule } from './common/common.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:true, //en produccion se deja en falso
    }),
    UsersModule,
    BedsModule,
    ServicesModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
