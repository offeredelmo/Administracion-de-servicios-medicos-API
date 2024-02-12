import { Module } from '@nestjs/common';
import { StayHistoryService } from './stay_history.service';
import { StayHistoryController } from './stay_history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StayHistory } from './entities/stay_history.entity';

@Module({
  controllers: [StayHistoryController],
  providers: [StayHistoryService],
  imports: [
    TypeOrmModule.forFeature([StayHistory])
  ]
})
export class StayHistoryModule {}
