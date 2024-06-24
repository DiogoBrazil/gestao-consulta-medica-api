import prismaClient from "../../prisma";
import { IUserPatientRepository } from "./IUserPatientRepository";
import { injectable } from "tsyringe";

@injectable()
class UserPatientRepository implements IUserPatientRepository {
    async create(user: {
        name: string;
        email: string;
        password: string;
    }): Promise<any> {
        const { name, email, password } = user;

        const newUser = await prismaClient.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        return newUser;
    }

    async findByEmail(email: string): Promise<any> {
        const user = await prismaClient.user.findFirst({
            where: {
                email,
            },
        });

        return user;
    }
}

export { UserPatientRepository };
