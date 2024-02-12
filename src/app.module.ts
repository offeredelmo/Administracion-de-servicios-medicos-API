import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BedsModule } from './beds/beds.module';
import { ServicesModule } from './services/services.module';
import { CommonModule } from './common/common.module';
import { BedsPatientsModule } from './beds_patients/beds_patients.module';
import { PatientsModule } from './patients/patients.module';
import { DiagnosesModule } from './diagnoses/diagnoses.module';
import { TasksModule } from './tasks/tasks.module';
import { StayHistoryModule } from './stay_history/stay_history.module';
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
    CommonModule,
    BedsPatientsModule,
    PatientsModule,
    DiagnosesModule,
    TasksModule,
    StayHistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
