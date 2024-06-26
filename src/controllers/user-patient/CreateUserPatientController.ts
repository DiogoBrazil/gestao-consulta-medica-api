// controllers/CreateUserController.ts
import { inject, injectable } from "tsyringe";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { HttpRequest } from "../../adapters/interfaces/server/IHttpRequest";
import { HttpResponse } from "../../adapters/interfaces/server/IHttpResponse";
import { Route } from "../../adapters/interfaces/server/IRoute";
import { CreateUserPatientUseCase } from "../../usecases/user-patient/CreateUserPatientUseCase";
import { CreateUserPatientDTO } from "../../dtos/users-patients/CreateUserPatientDTO";

@injectable()
class CreateUserPatientController implements Route {
    constructor(
        @inject(CreateUserPatientUseCase)
        private createUserPatientUseCase: CreateUserPatientUseCase
    ) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const data = httpRequest.body as CreateUserPatientDTO;

            const newPatientUser = await this.createUserPatientUseCase.execute({
                ...data,
            });

            return {
                statusCode: 200,
                body: newPatientUser,
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { message: (err as Error).message },
            };
        }
    }
}

export { CreateUserPatientController };
