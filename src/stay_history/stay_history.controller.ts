import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StayHistoryService } from './stay_history.service';
import { CreateStayHistoryDto } from './dto/create-stay_history.dto';
import { UpdateStayHistoryDto } from './dto/update-stay_history.dto';

@Controller('stay-history')
export class StayHistoryController {
  constructor(private readonly stayHistoryService: StayHistoryService) {}

  @Post()
  create(@Body() createStayHistoryDto: CreateStayHistoryDto) {
    return this.stayHistoryService.create(createStayHistoryDto);
  }

  @Get()
  findAll() {
    return this.stayHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stayHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStayHistoryDto: UpdateStayHistoryDto) {
    return this.stayHistoryService.update(+id, updateStayHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stayHistoryService.remove(+id);
  }
}
