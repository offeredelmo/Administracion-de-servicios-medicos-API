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
      const listServices: Service[] = await this.serviceRepository.find({relations: ['bed']})
      return listServices;
    } catch (error) {
      throw new InternalServerErrorException("un error ocurrio al listar los servicios")
    }
    
  }


  async update(id: string, updateServiceDto: UpdateServiceDto) {

    const service = await this.serviceRepository.preload({
      id_service: id,
      ...updateServiceDto
    })
    if (!service) throw new NotFoundException(`no se encontro el servicio con el id ${id}`)
    try {
      await this.serviceRepository.save(service);
      return `This action updates a #${id} service`;
    } catch (error) {
      this.handleDBExceptions(error)
    }
   
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
