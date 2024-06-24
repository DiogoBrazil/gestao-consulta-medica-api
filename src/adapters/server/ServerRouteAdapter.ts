// adapters/ExpressRouteAdapter.ts
import express, { Request, Response, Express } from "express";
import { Route } from "./interfaces/IRoute";
import { HttpRequest } from "./interfaces/IHttpRequest";
import { HttpResponse } from "./interfaces/IHttpResponse";

class ServerRouteAdapter {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  static adapt(route: Route) {
    return async (req: Request, res: Response) => {
      const httpRequest: HttpRequest = {
        body: req.body,
        headers: req.headers,
      };

      try {
        const httpResponse: HttpResponse = await route.route(httpRequest);

        if (httpResponse.headers) {
          for (const [key, value] of Object.entries(httpResponse.headers)) {
            res.setHeader(key, value as string);
          }
        }

        res.status(httpResponse.statusCode).json(httpResponse.body);
      } catch (error) {
        res.status(500).json({
          error: "An unexpected error occurred.",
        });
      }
    };
  }

  registerRoute(
    method: "get" | "post" | "put" | "delete",
    path: string,
    route: Route
  ) {
    switch (method) {
      case "get":
        this.app.get(path, ServerRouteAdapter.adapt(route));
        break;
      case "post":
        this.app.post(path, ServerRouteAdapter.adapt(route));
        break;
      case "put":
        this.app.put(path, ServerRouteAdapter.adapt(route));
        break;
      case "delete":
        this.app.delete(path, ServerRouteAdapter.adapt(route));
        break;
    }
  }

  listen(port: number, callback?: () => void): void {
    this.app.listen(port, callback);
  }
}

export { ServerRouteAdapter };
