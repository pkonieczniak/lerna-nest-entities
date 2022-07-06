import { Module } from '@nestjs/common';
import { DatabaseModule } from '@libs/database';
import { AuthModule } from '@libs/auth';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
