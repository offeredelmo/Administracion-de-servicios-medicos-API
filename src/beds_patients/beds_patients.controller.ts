import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BedsPatientsService } from './beds_patients.service';
import { CreateBedsPatientDto } from './dto/create-beds_patient.dto';
import { UpdateBedsPatientDto } from './dto/update-beds_patient.dto';

@Controller('beds-patients')
export class BedsPatientsController {
  constructor(private readonly bedsPatientsService: BedsPatientsService) {}

  @Post()
  create(@Body() createBedsPatientDto: CreateBedsPatientDto) {
    return this.bedsPatientsService.create(createBedsPatientDto);
  }

  @Get()
  findAll() {
    return this.bedsPatientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bedsPatientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBedsPatientDto: UpdateBedsPatientDto) {
    return this.bedsPatientsService.update(+id, updateBedsPatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bedsPatientsService.remove(+id);
  }
}
