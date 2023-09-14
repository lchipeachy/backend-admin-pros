/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUUID, Matches, MaxLength, MinLength, isString } from 'class-validator';

export class ChangePasswordDto {
    @IsString()
    @IsNotEmpty()
    oldPassword: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/, {
        message:
            'La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial',
        })
        new_password: string;

    @IsString()
    @IsUUID()
    user_id: string;
}