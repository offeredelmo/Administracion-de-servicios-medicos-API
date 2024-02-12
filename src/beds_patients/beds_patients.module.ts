import { Module } from '@nestjs/common';
import { BedsPatientsService } from './beds_patients.service';
import { BedsPatientsController } from './beds_patients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BedsPatient } from './entities/beds_patient.entity';

@Module({
  controllers: [BedsPatientsController],
  providers: [BedsPatientsService],
  imports:[
    TypeOrmModule.forFeature([BedsPatient])
  ]
})
export class BedsPatientsModule {}
