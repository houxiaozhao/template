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
import { ApiDto, CreateApiDto, UpdateApiDte } from './dto/api.dto';
import { ApiService } from './api.service';
import { trim } from 'lodash';
import { JWTAdminAuthGuard } from '../auth/jwt-admin-auth.guard';
import { Api } from './entities/api.model';
@ApiTags('api管理')
@ApiBearerAuth()
@Controller('api')
@UseGuards(JWTAdminAuthGuard)
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  @ApiResponse({
    status: 200,
    isArray: true,
    type: ApiDto,
  })
  @ApiOperation({ summary: '获取接口列表' })
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
      querys.$or = [{ alias: searchRegExp }, { method: searchRegExp }];
    }
    return await this.apiService.index(querys, { page, sort, limit });
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    type: ApiDto,
  })
  @ApiOperation({ summary: '获取接口' })
  async show(@Param('id', new MongoIdPipe()) id) {
    return this.apiService.show(id);
  }

  @Post()
  @ApiBody({
    type: CreateApiDto,
  })
  @ApiResponse({
    status: 200,
    type: ApiDto,
  })
  @ApiOperation({ summary: '创建接口' })
  async create(@Body() body: Api) {
    return this.apiService.create(body);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateApiDte })
  @ApiResponse({
    status: 200,
    type: ApiDto,
  })
  @ApiOperation({ summary: '更新接口' })
  async update(@Param('id', new MongoIdPipe()) id, @Body() body) {
    return this.apiService.update(id, body);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    type: ApiDto,
  })
  @ApiOperation({ summary: '删除接口' })
  async delete(@Param('id', new MongoIdPipe()) id) {
    return this.apiService.delete(id);
  }
}
