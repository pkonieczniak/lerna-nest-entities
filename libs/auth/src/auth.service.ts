import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/UserRepository';

@Injectable()
export class AuthService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: UserRepository) {}

  public getAuthenticatedUser(userId: number) {
    return this.userRepository.getAuthenticatedUser(userId)
  }
}
