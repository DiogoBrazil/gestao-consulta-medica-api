import { HttpRequest } from "./IHttpRequest";
import { HttpResponse } from "./IHttpResponse";

export interface Route {
    handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
