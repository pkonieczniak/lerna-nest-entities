import { UserEntity, createCustomRepository } from "@libs/database";
import { Repository } from "typeorm"

interface IUser {
  getAuthenticatedUser(userId: number): Promise<UserEntity[]>
}

export abstract class UserRepository extends Repository<UserEntity> implements IUser  {
  abstract getAuthenticatedUser(userId: number): Promise<UserEntity[]>
}

export const createUserRepository = createCustomRepository<UserEntity, IUser>(UserEntity, function (repository)  {
  return {
    getAuthenticatedUser: function (userId: number) {
      return repository.findBy({ id: userId })
    }
  }
})