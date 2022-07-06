import { Controller, Get } from '@nestjs/common';
import { AuthService } from '@libs/auth';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async getHello(): Promise<any> {
    const user = await this.authService.getAuthenticatedUser(1)

    console.log(user);

    return user;
  }
}
