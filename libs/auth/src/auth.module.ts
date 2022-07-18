import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserRepository } from './repositories/UserRepository';


@Module({
  providers: [
    AuthService,
    {
      provide: 'USER_REPOSITORY',
      useFactory: createUserRepository,
      inject: ['DATA_SOURCE'],
    }
  ],
  exports: [AuthService]
})
export class AuthModule {}
