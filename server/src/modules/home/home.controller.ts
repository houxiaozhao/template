import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from 'nestjs-config';

@Controller('')
@ApiTags('home')
export class HomeController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  async home() {
    return 'nestjs app';
  }
}
