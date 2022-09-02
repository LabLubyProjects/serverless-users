import { makeCreateUserUseCase } from "../../../infra/factories/usecases/create-user-use-case-factory";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { createUserValidations, updateUserValidations } from "./user-controller-validations";

export class UserController {
  static async createUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const error = createUserValidations().validate(body);

    if(error) throw error;
    
    const createUserUseCase = makeCreateUserUseCase();
    const createUserUseCaseResponse = await createUserUseCase.handle(body);

    return {
      statusCode: 201,
      body: createUserUseCaseResponse
    }
  }

  static async updateUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const error = updateUserValidations(Object.keys(body)).validate(body);
    if(error) throw error;
  }

  static async findUserByID(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: 'something'
    }
  }

  static async findAllUsers(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { query } = httpRequest;
    const error = updateUserValidations(Object.keys(query)).validate(query);
    if(error) throw error;
  }

  static async deleteUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: 'something'
    }
  }
}