import {
    IsNotEmpty,
    IsString,
    Length,
    IsOptional,
    IsDateString,
    Matches,
} from "class-validator";

class CreateUserPatientDTO {
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @IsString()
    @Length(1, 10)
    sex: string;

    @IsString()
    socialName: string;

    @IsNotEmpty()
    @IsString()
    @Length(15, 15)
    cns: string;

    @IsNotEmpty()
    @IsString()
    @Length(11, 11)
    cpf: string;

    @IsNotEmpty()
    @IsDateString()
    birthDate: string;

    @IsString()
    @Length(1, 5)
    bloodType: string;

    @IsString()
    @Matches(/^\d{10,15}$/, {
        message: "phone must be between 10 to 15 digits",
    })
    phone: string;

    @IsString()
    address: string;

    createdAt: Date;

    updatedAt: Date;
}

export { CreateUserPatientDTO };
