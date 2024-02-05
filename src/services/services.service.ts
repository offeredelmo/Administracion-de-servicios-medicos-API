import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {

  private readonly logger = new Logger('ServicesService')

  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>
  ){}


  async create(createServiceDto: CreateServiceDto) {
    try {
      const newService = this.serviceRepository.create(createServiceDto)
      await this.serviceRepository.save(newService)
      return  `el servicio ${newService.name} se a creado`
    } catch (error) {
      this.handleDBExceptions(error)
    }
    
  }

  async findAll() {
    try {
      const listServices: Service[] = await this.serviceRepository.find()
      return listServices;
    } catch (error) {
      throw new InternalServerErrorException("un error ocurrio al listar los servicios")
    }
    
  }


  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  async remove(uuid: string) {
   
   const serivece =  await this.serviceRepository.delete(uuid)
   if (serivece.affected === 0) {
    throw new NotFoundException('no se encontro el servicio con el uuid' + uuid);
   } 
  }

  private handleDBExceptions(error: any) {
    if (error.code === "23505") {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error)
    throw new InternalServerErrorException('Unesxpected error, chec server logs')
  }
}
