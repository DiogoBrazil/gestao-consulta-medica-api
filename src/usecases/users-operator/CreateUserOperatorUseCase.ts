import { injectable } from "tsyringe";
import { PasswordProvider } from "../../providers/PasswordProvider";
import { CreateUserDTO } from "../../dtos/users-patients/CreateUserPatientDTO";

@injectable()
class CreateUserUseCase {
    constructor(private passwordProvider: PasswordProvider) {}

    async execute(data: CreateUserDTO) {
        const hashedPassword = await this.passwordProvider.createHash(
            data.password
        );

        return "User created successfully!";
    }
}

export { CreateUserUseCase };
