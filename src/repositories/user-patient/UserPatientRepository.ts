import prismaClient from "../../prisma";
import { IUserPatientRepository } from "./IUserPatientRepository";
import { CreateUserPatientDTO } from "../../dtos/users-patients/CreateUserPatientDTO";
import { injectable } from "tsyringe";

@injectable()
class UserPatientRepository implements IUserPatientRepository {
    async create(newUserPatientData: CreateUserPatientDTO): Promise<any> {
        const newUserPatient = await prismaClient.userPatient.create({
            data: {
                ...newUserPatientData,
            },
        });

        return newUserPatient;
    }

    async findByCpf(cpf: string): Promise<any> {
        const userPatient = await prismaClient.userPatient.findFirst({
            where: {
                cpf,
            },
        });

        return userPatient;
    }
}

export { UserPatientRepository };
