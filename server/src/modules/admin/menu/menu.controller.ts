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
import { MenuDto, CreateMenuDto, UpdateMenuDto } from './dto/menu.dto';
import { MenuService } from './menu.service';
import { isEmpty, trim } from 'lodash';
import { JWTAdminAuthGuard } from '../auth/jwt-admin-auth.guard';
@ApiTags('菜单管理')
@ApiBearerAuth()
@Controller('menu')
@UseGuards(JWTAdminAuthGuard)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('menutree')
  @ApiOperation({ summary: '获取菜单树' })
  async menuTree() {
    return this.menuService.menuTree();
  }

  @Get()
  @ApiOperation({ summary: '获取菜单列表' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: MenuDto,
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
      querys.$or = [{ title: searchRegExp }, { content: searchRegExp }];
    }
    return await this.menuService.index(querys, { page, sort, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: '获取菜单' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    type: MenuDto,
  })
  async show(@Param('id', new MongoIdPipe()) id) {
    return this.menuService.show(id);
  }

  @Post()
  @ApiBody({
    type: CreateMenuDto,
  })
  @ApiResponse({
    status: 200,
    type: MenuDto,
  })
  @ApiOperation({ summary: '创建菜单' })
  async create(@Body() body: CreateMenuDto) {
    if (!body.parent || isEmpty(body.parent)) {
      Reflect.deleteProperty(body, 'parent');
    }
    return this.menuService.create(body);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateMenuDto })
  @ApiResponse({
    status: 200,
    type: MenuDto,
  })
  @ApiOperation({ summary: '更新菜单' })
  async update(@Param('id', new MongoIdPipe()) id, @Body() body) {
    return this.menuService.update(id, body);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    type: MenuDto,
  })
  @ApiOperation({ summary: '删除菜单' })
  async delete(@Param('id', new MongoIdPipe()) id) {
    return this.menuService.delete(id);
  }
}
