import { PartialType } from '@nestjs/mapped-types';
import { CreateStayHistoryDto } from './create-stay_history.dto';

export class UpdateStayHistoryDto extends PartialType(CreateStayHistoryDto) {}
