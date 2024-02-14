import { IsBoolean, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateBedDto {
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    number_bed: number

    @IsString()
    @IsNotEmpty()
    service_id: string
}
