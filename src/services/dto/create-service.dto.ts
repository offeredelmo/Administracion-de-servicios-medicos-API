import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { Bed } from "src/beds/entities/bed.entity";


export class CreateServiceDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsArray()
    beds?: Bed[]

}
