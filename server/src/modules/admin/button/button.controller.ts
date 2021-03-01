import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';
import { ButtonDto, CreateButtonDto, UpdateButtonDto } from './dto/button.dto';
import { ButtonService } from './button.service';
import { isEmpty, trim } from 'lodash';
import { JWTAdminAuthGuard } from '../auth/jwt-admin-auth.guard';
@ApiTags('按钮管理')
@ApiBearerAuth()
@Controller('button')
@UseGuards(JWTAdminAuthGuard)
export class ButtonController {
  constructor(private readonly buttonService: ButtonService) {}

  @Get()
  @ApiOperation({ summary: '获取按钮列表' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: ButtonDto,
  })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'search', required: false })
  async index(
    @Query('page', new ParseIntPipe()) page = 1,
    @Query('sort') sort = '-_id',
    @Query('limit', new ParseIntPipe()) limit = 10,
    @Query('search') search?: string,
  ) {
    const querys: any = {};
    if (trim(search)) {
      const searchRegExp = new RegExp(trim(search), 'i');
      querys.$or = [{ name: searchRegExp }];
    }
    return await this.buttonService.index(querys, { page, sort, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: '获取按钮' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    type: ButtonDto,
  })
  async show(@Param('id', new MongoIdPipe()) id) {
    return this.buttonService.show(id);
  }

  @Post()
  @ApiBody({
    type: CreateButtonDto,
  })
  @ApiResponse({
    status: 200,
    type: ButtonDto,
  })
  @ApiOperation({ summary: '创建按钮' })
  async create(@Body() body: CreateButtonDto) {
    return this.buttonService.create(body);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateButtonDto })
  @ApiResponse({
    status: 200,
    type: ButtonDto,
  })
  @ApiOperation({ summary: '更新按钮' })
  async update(@Param('id', new MongoIdPipe()) id, @Body() body) {
    return this.buttonService.update(id, body);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    type: ButtonDto,
  })
  @ApiOperation({ summary: '删除按钮' })
  async delete(@Param('id', new MongoIdPipe()) id) {
    return this.buttonService.delete(id);
  }
}
