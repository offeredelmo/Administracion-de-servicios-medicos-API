import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateBedDto } from './dto/create-bed.dto';
import { UpdateBedDto } from './dto/update-bed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bed } from './entities/bed.entity';
import { Repository } from 'typeorm';
import { Service } from 'src/services/entities/service.entity';

@Injectable()
export class BedsService {

  private readonly logger = new Logger('BedsService')

  constructor(
    @InjectRepository(Bed)
    private readonly bedRepository: Repository<Bed>,
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ){}


  async create(createBedDto: CreateBedDto) {

    const service = await this.serviceRepository.findOne({ where: { id_service: createBedDto.service_id } });

    if (!service) throw new BadRequestException("services not found")

    try {

      const bed = this.bedRepository.create({
        number_bed: createBedDto.number_bed,
        service: service,
      });
      return await this.bedRepository.save(bed);

    } catch (error) {
      console.log(error)
      this.handleDBExceptions(error)
    }
   
  }
  
  //cambiar el numero de la cama
  //solo se pondra cambiar de numero si esta disponible(false) pa
  //solo el usuario admin podra acceder al este endpoint
  async updateNumberbed(id: string, updateBedDto: UpdateBedDto) {

    const updatebed = await this.bedRepository.preload({
      id_bed: id,
      number_bed: updateBedDto.number_bed
    })
    await this.bedRepository.save(updatebed)

    
    return `cambiarle el numero de cama a la cama paps`;
  }

  //actualizar el atributo de avalible de la cama
  swapAvalibleBed(id: string){
    return 'cambiarle la disponibilidad a la cama paps'
  }

  //eliminar una cama 
  //solo el usuario admin podra acceder al este endpoint
  remove(id: number) {
    return `This action removes a #${id} bed`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === "23505") {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Unesxpected error, chec server logs')
  }
}
