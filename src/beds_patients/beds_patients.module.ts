import { Module } from '@nestjs/common';
import { BedsPatientsService } from './beds_patients.service';
import { BedsPatientsController } from './beds_patients.controller';

@Module({
  controllers: [BedsPatientsController],
  providers: [BedsPatientsService],
})
export class BedsPatientsModule {}
