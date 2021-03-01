import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
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
import { trim } from 'lodash';
import { User } from 'src/common/decorator/user.decorator';
import { UserType } from 'src/common/interfaces/user.interface';
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { JWTAuthGuard } from '../auth/jwt-auth.guard';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeviceDto } from './dto/device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@ApiTags('device管理')
@ApiBearerAuth()
@Controller('device')
@UseGuards(JWTAuthGuard)
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  @ApiOperation({ summary: '创建device' })
  @ApiResponse({
    status: 200,
    type: DeviceDto,
  })
  create(@Body() createDeviceDto: CreateDeviceDto, @User() user: UserType) {
    return this.deviceService.create(
      Object.assign(createDeviceDto, { company: user.company }),
    );
  }

  @Get()
  @ApiOperation({ summary: '获取device列表' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: DeviceDto,
  })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'search', required: false })
  findAll(
    @User() user: UserType,
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
    querys.company = user.company;
    return this.deviceService.findAll(querys, { page, sort, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: '获取device' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    type: DeviceDto,
  })
  async findOne(@Param('id', new MongoIdPipe()) id, @User() user: UserType) {
    return this.deviceService.findOne(id, user.company);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新device' })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateDeviceDto })
  @ApiResponse({
    status: 200,
    type: DeviceDto,
  })
  async update(
    @Param('id', new MongoIdPipe()) id,
    @Body() updateDeviceDto: UpdateDeviceDto,
    @User() user: UserType,
  ) {
    return this.deviceService.update(id, user.company, updateDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除device' })
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    type: DeviceDto,
  })
  async remove(@Param('id', new MongoIdPipe()) id) {
    return this.deviceService.remove(id);
  }
}
