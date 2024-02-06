import { PartialType } from '@nestjs/mapped-types';
import { CreateBedsPatientDto } from './create-beds_patient.dto';

export class UpdateBedsPatientDto extends PartialType(CreateBedsPatientDto) {}
