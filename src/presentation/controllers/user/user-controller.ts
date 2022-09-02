import { HttpRequest, HttpResponse } from "../../protocols/http";
import { createUserValidations } from "./user-controller-validations";

export class UserController {
  static async createUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const error = createUserValidations().validate(body);
    if(error) throw error;
    
  }

  static async updateUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: 'something'
    }
  }

  static async findUserByID(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: 'something'
    }
  }

  static async findAllUsers(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: 'something'
    }
  }

  static async deleteUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: 'something'
    }
  }
}