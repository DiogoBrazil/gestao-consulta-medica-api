import { injectable } from "tsyringe";
import { PasswordProvider } from "../../providers/PasswordProvider";
import { CreateUserPatientDTO } from "../../dtos/users-patients/CreateUserPatientDTO";
import { UserPatientRepository } from "../../repositories/user-patient/UserPatientRepository";

@injectable()
class CreateUserPatientUseCase {
    constructor(private userPatientRepository: UserPatientRepository) {}

    async execute(data: CreateUserPatientDTO) {
        const userPatientExists = await this.userPatientRepository.findByCpf(
            data.cpf
        );

        if (userPatientExists) {
            throw new Error("Patient already exists");
        }

        const newUserPatient = await this.userPatientRepository.create(data);

        return newUserPatient;
    }
}

export { CreateUserPatientUseCase };
