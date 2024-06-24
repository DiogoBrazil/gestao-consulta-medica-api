// routes/UserRoutes.ts
import { ServerRouteAdapter } from "../../adapters/server/ServerRouteAdapter";
import { container } from "tsyringe";
import { CreateUserController } from "../../controllers/user-patient/CreateUserPatientController";

const userRoutes = (adapter: ServerRouteAdapter) => {
    const createUserController = container.resolve(CreateUserController);

    adapter.registerRoute("post", "/users", createUserController);
    // Adicione mais rotas conforme necessário
};

export { userRoutes };
