import { UserModel } from "../../domain/users/user-model";
import { UserRepository } from "../../domain/users/user-repository";
import { mapPrismaUserToDomainUserModel } from "./helpers";
import { prismaClient } from "./prisma";

export class DbUserRepository implements UserRepository {
  async create(user: UserModel): Promise<UserModel> {
    const prismaUser = await prismaClient.user.create({
      data: user
    });

    return mapPrismaUserToDomainUserModel(prismaUser);
  }

  async update(user: Partial<UserModel>): Promise<UserModel> {
    const updatedPrismaUser = await prismaClient.user.update({
      where: {
        id: user.id
      }, data: user
    });

    return mapPrismaUserToDomainUserModel(updatedPrismaUser);
  }

  async delete(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: {
        id
      }
    });
  }

  async findByCPF(cpf: string): Promise<UserModel | null> {
    const prismaUser = await prismaClient.user.findUnique({
      where: {
        cpf
      }
    });

    if(!prismaUser) return null;

    return mapPrismaUserToDomainUserModel(prismaUser);
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const prismaUser = await prismaClient.user.findUnique({
      where: {
        email
      }
    });

    if(!prismaUser) return null;

    return mapPrismaUserToDomainUserModel(prismaUser);
  }

  async findByID(id: string): Promise<UserModel | null> {
    const prismaUser = await prismaClient.user.findUnique({
      where: {
        id
      }
    });

    if(!prismaUser) return null;

    return mapPrismaUserToDomainUserModel(prismaUser);
  }

  async findAll(pagination?: { page: number; perPage: number; } | undefined): Promise<UserModel[]> {
    if(!pagination) return prismaClient.user.findMany();

    return prismaClient.user.findMany({
      take: pagination.perPage,
      skip: pagination.page * pagination.perPage
    })
  }
}