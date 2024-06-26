import "reflect-metadata";
import { container } from "tsyringe";
import express from "express";
import { UserPatientRepository } from "./repositories/user-patient/UserPatientRepository";
import { CreateUserPatientUseCase } from "./usecases/user-patient/CreateUserPatientUseCase";
import { CreateUserPatientController } from "./controllers/user-patient/CreateUserPatientController";
import { PasswordProvider } from "./providers/PasswordProvider";
import { JWTProvider } from "./providers/JWTProvider";
import { ServerRouteAdapter } from "./adapters/server/ServerRouteAdapter";
import { userPatientRoutes } from "./routes/user-patient/UserPatientRoutes";

// Registro das implementações no contêiner DI
container.registerSingleton(UserPatientRepository);
container.registerSingleton(CreateUserPatientUseCase);
container.registerSingleton(CreateUserPatientController);
container.registerSingleton(PasswordProvider);
container.registerSingleton(JWTProvider);

// Inicializa o servidor Express

const app = express();
app.use(express.json());

// Inicializa o adaptador do Express
const serverRouteAdapter = new ServerRouteAdapter(app);
userPatientRoutes(serverRouteAdapter);

export { serverRouteAdapter };
