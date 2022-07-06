import { DynamicModule, Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from './entities/User.entity'

const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'lerna-nest',
        entities: [UserEntity],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
