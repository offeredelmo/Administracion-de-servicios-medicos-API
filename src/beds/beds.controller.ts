import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { BedsService } from './beds.service';
import { CreateBedDto } from './dto/create-bed.dto';
import { UpdateBedDto } from './dto/update-bed.dto';
import { Bed } from './entities/bed.entity';

@Controller('beds')
export class BedsController {
  constructor(private readonly bedsService: BedsService) {}

  @Post()
  create(@Body() createBedDto: CreateBedDto) {
    return this.bedsService.create(createBedDto);
  }

  @Patch(':id')
  updateNumberbed(@Param('id') id: string, @Body() updateBedDto: UpdateBedDto) {
    return this.bedsService.updateNumberbed(id, updateBedDto);
  }

  @Patch(':id')
  swapAvalibleBed(@Param(':id') id:string){
    return this.bedsService.swapAvalibleBed(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bedsService.remove(+id);
  }
}
