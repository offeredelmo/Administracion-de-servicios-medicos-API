import { Injectable } from '@nestjs/common';
import { CreateBedsPatientDto } from './dto/create-beds_patient.dto';
import { UpdateBedsPatientDto } from './dto/update-beds_patient.dto';

@Injectable()
export class BedsPatientsService {
  create(createBedsPatientDto: CreateBedsPatientDto) {
    return 'This action adds a new bedsPatient';
  }

  findAll() {
    return `This action returns all bedsPatients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bedsPatient`;
  }

  update(id: number, updateBedsPatientDto: UpdateBedsPatientDto) {
    return `This action updates a #${id} bedsPatient`;
  }

  remove(id: number) {
    return `This action removes a #${id} bedsPatient`;
  }
}
