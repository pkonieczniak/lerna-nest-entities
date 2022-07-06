import { UserEntity } from '@libs/database';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AuthService } from './auth.service';

@Module({
  providers: [
    AuthService,
    {
      provide: 'USER_REPOSITORY',
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository(UserEntity)
      },
      inject: ['DATA_SOURCE'],
    }
  ],
  exports: [AuthService]
})
export class AuthModule {}
