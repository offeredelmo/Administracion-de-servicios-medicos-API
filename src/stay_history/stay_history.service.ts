import { Injectable } from '@nestjs/common';
import { CreateStayHistoryDto } from './dto/create-stay_history.dto';
import { UpdateStayHistoryDto } from './dto/update-stay_history.dto';

@Injectable()
export class StayHistoryService {
  create(createStayHistoryDto: CreateStayHistoryDto) {
    return 'This action adds a new stayHistory';
  }

  findAll() {
    return `This action returns all stayHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stayHistory`;
  }

  update(id: number, updateStayHistoryDto: UpdateStayHistoryDto) {
    return `This action updates a #${id} stayHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} stayHistory`;
  }
}
