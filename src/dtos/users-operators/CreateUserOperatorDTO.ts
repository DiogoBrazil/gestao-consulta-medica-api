import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

class CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

export { CreateUserDTO };
