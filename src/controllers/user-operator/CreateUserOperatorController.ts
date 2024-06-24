// controllers/CreateUserController.ts
import { inject, injectable } from "tsyringe";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { HttpRequest } from "../../adapters/interfaces/server/IHttpRequest";
import { HttpResponse } from "../../adapters/interfaces/server/IHttpResponse";
import { Route } from "../../adapters/interfaces/server/IRoute";
import { CreateUserUseCase } from "../../usecases/user-patient/CreateUserPatientUseCase";
import { CreateUserDTO } from "../../dtos/users-patients/CreateUserPatientDTO";

@injectable()
class CreateUserController implements Route {
    constructor(
        @inject(CreateUserUseCase) private createUserService: CreateUserUseCase
    ) {}

    async route(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const createUserDTO = plainToInstance(
                CreateUserDTO,
                httpRequest.body
            );
            const errors = await validate(createUserDTO);

            if (errors.length > 0) {
                return {
                    statusCode: 400,
                    body: errors,
                };
            }

            const { name, email, password } = httpRequest.body;
            const user = await this.createUserService.execute({
                name,
                email,
                password,
            });

            return {
                statusCode: 200,
                body: user,
            };
        } catch (err) {
            return {
                statusCode: 400,
                body: { message: (err as Error).message },
            };
        }
    }
}

export { CreateUserController };
