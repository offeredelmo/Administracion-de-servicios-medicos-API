import { IsBoolean, IsIn, IsNotEmpty, IsString, IsUUID, isEmail, isString } from "class-validator"
import { UserRole } from "../entities/user.entity"



export class CreateUserDto {
   @IsString()
   @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    email:string
    
    @IsString()
    @IsNotEmpty()
    password:string
    
    @IsString()
    @IsNotEmpty()
    phone: string

    @IsIn([UserRole.ADMIN, UserRole.DOC])
    @IsNotEmpty()
    rol:UserRole
    
}
