import { makeCreateUserUseCase } from "../../../infra/factories/usecases/create-user-use-case-factory";
import { makeDeleteUserUseCase } from "../../../infra/factories/usecases/delete-user-use-case-factory";
import { makeFindAllUsersUseCase } from "../../../infra/factories/usecases/find-all-users-use-case-factory";
import { makeFindUserByIDUseCase } from "../../../infra/factories/usecases/find-user-by-id-use-case-factory";
import { makeUpdateUserUseCase } from "../../../infra/factories/usecases/update-user-use-case-factory";
import httpClient from "../../adapters/axios-adapter";
import { ServerError } from "../../errors/server-error";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { createUserValidations, updateUserValidations } from "./user-controller-validations";

export class UserController {
  static async createUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;
    const error = createUserValidations().validate(body);

    if(error) throw error;

    const createUserUseCase = makeCreateUserUseCase();
    const createUserUseCaseResponse = await createUserUseCase.handle(body);
    
    const ms_url = process.env.AUTH_MS_URL ?? 'http://localhost:4000'

    const sendToAuthMS = await httpClient.post(`${ms_url}/users`, {
      id: createUserUseCaseResponse.id,
      email: createUserUseCaseResponse.email,
      password: createUserUseCaseResponse.password
    });

    if(sendToAuthMS.statusCode !== 201) throw new ServerError();
    
    return {
      statusCode: 201,
      body: createUserUseCaseResponse
    }
  }

  static async updateUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { params, body } = httpRequest;
    const error = updateUserValidations(Object.keys(body)).validate(body);
    if(error) throw error;

    const updateUserUseCase = makeUpdateUserUseCase();
    const updateUserUseCaseResponse = await updateUserUseCase.handle({ id: params.id, ...body });

    if(!updateUserUseCaseResponse) return {
      statusCode: 404,
      body: {
        message: 'Usuário não encontrado'
      }
    }

    const ms_url = process.env.AUTH_MS_URL ?? 'http://localhost:4000';

    const sendToAuthMS = await httpClient.put(`${ms_url}/users/${updateUserUseCaseResponse.id}`, {
      email: updateUserUseCaseResponse.email,
      password: updateUserUseCaseResponse.password
    });

    if(sendToAuthMS.statusCode !== 200) throw new ServerError();

    return {
      statusCode: 200,
      body: updateUserUseCaseResponse
    }
  }

  static async findUserByID(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    
    const findUserByIDUseCase = makeFindUserByIDUseCase();
    const findUserByIDUseCaseResult = await findUserByIDUseCase.handle(id);

    if(!findUserByIDUseCaseResult) return {
      statusCode: 404,
      body: {
        message: 'Usuário não encontrado'
      }
    }

    return {
      statusCode: 200,
      body: findUserByIDUseCaseResult
    }
  }

  static async findAllUsers(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { query } = httpRequest;
    const error = updateUserValidations(Object.keys(query)).validate(query);
    if(error) throw error;

    const findAllUsersUseCase = makeFindAllUsersUseCase();
    const findAllUsersUseCaseResult = await findAllUsersUseCase.handle({ page: query.page, perPage: query.perPage });

    return {
      statusCode: 200,
      body: findAllUsersUseCaseResult
    }
  }

  static async deleteUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    
    if(!id) return {
      statusCode: 400,
      body: {
        message: 'ID não foi fornecido'
      }
    }

    const deleteUserUseCase = makeDeleteUserUseCase();
    const deleteUserUseCaseResult = await deleteUserUseCase.handle(id);
 
    if(deleteUserUseCaseResult === null) return {
      statusCode: 404,
      body: {
        message: 'Usuário não encontrado'
      }
    }

    const ms_url = process.env.AUTH_MS_URL ?? 'http://localhost:4000';

    const sendToAuthMS = await httpClient.put(`${ms_url}/users/${id}`);

    if(sendToAuthMS.statusCode !== 204) throw new ServerError();

    return {
      statusCode: 204
    }
  }

  static testAuth(httpRequest: HttpRequest): HttpResponse {
    const user = httpRequest.user;
    return {
      statusCode: 200,
      body: {
        message: `Bem-vindo ao serverless ${user?.name}.`
      }
    }
  }
}