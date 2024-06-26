// routes/UserPatientRoutes.ts
import { ServerRouteAdapter } from "../../adapters/server/ServerRouteAdapter";
import { container } from "tsyringe";
import { CreateUserPatientController } from "../../controllers/user-patient/CreateUserPatientController";

const userPatientRoutes = (adapter: ServerRouteAdapter) => {
    const createUserPatientController = container.resolve(
        CreateUserPatientController
    );

    adapter.registerRoute("post", "/userPatient", createUserPatientController);
    // Adicione mais rotas conforme necessário
};

export { userPatientRoutes };
