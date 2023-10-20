import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './register.dto/register.dto';
import { LoginDto } from './login.dto/login.dto';
import { ResponseDto } from './response.dto/response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<ResponseDto> {
    const user = await this.usersService.create(registerDto);
    return {
      success: true,
      data: user,
    };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<ResponseDto> {
    const user = await this.usersService.findByEmailAndPassword(loginDto);
    return {
      success: true,
      data: user,
    };
  }
}
