import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '@libs/database'
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>) {}

  public getAuthenticatedUser(userId: number) {
    return this.userRepository.findBy({ id: userId })
  }
}
