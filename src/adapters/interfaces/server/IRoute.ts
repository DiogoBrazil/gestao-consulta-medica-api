import { HttpRequest } from "./IHttpRequest";
import { HttpResponse } from "./IHttpResponse";

export interface Route {
  route(httpRequest: HttpRequest): Promise<HttpResponse>;
}
