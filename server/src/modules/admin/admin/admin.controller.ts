import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('admin')
@ApiTags('admin管理')
export class AdminController {}
