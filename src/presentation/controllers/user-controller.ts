import { HttpRequest, HttpResponse } from "../protocols/http";

export class UserController {
  static async createUser(httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      body: 'something'
    }
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