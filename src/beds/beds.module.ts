import { Module } from '@nestjs/common';
import { BedsService } from './beds.service';
import { BedsController } from './beds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bed } from './entities/bed.entity';
import { ServicesService } from 'src/services/services.service';
import { Service } from 'src/services/entities/service.entity';

@Module({
  controllers: [BedsController],
  providers: [BedsService],
  imports:[TypeOrmModule.forFeature([Bed,Service])]
})
export class BedsModule {}
