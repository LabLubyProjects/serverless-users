import { UserModel } from "../../domain/users/user-model";

export interface HttpResponse {
  statusCode: number;
  body?: any;
}

export interface HttpRequest {
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
  user?: UserModel;
}

export interface HttpClient {
  post(url: string, body?: any): Promise<HttpResponse>;
  get(url: string, body?: any): Promise<HttpResponse>;
  put(url: string, body?: any): Promise<HttpResponse>;
  delete(url: string, body?: any): Promise<HttpResponse>;
}