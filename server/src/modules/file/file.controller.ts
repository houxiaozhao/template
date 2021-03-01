import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ConfigService } from 'nestjs-config';
import { User } from 'src/common/decorator/user.decorator';
import { UserType } from 'src/common/interfaces/user.interface';
import { JWTAuthGuard } from '../auth/jwt-auth.guard';
import { createSignedUrlSyncDTO, FileUploadDto } from './dto/file.dto';
import { FileService } from './file.service';
import ObsClient from 'esdk-obs-nodejs';
import { v4 as uuidv4 } from 'uuid';
import mime from 'mime-types';
import { AuthorizationGuard } from '../auth/authorization.guard';

@ApiTags('文件上传')
@Controller('file')
@ApiBearerAuth()
@UseGuards(JWTAuthGuard, AuthorizationGuard)
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly config: ConfigService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '上传文件',
    type: FileUploadDto,
  })
  async uploadFile(@UploadedFile() file, @User() user: UserType) {
    console.log(file);
    return await this.fileService.upload(file, user);
  }

  @Post('upload-exif')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '上传文件',
    type: FileUploadDto,
  })
  async uploadFileEXIF(@UploadedFile() file, @User() user: UserType) {
    let exif = {};
    try {
      exif = await this.fileService.exif(file.path);
    } catch (error) {}
    return {
      url: await this.fileService.upload(file, user),
      exif: exif,
    };
  }

  @Post('signedUrlSync')
  @ApiBody({})
  async createSignedUrlSync(
    @User() user: UserType,
    @Body() body: createSignedUrlSyncDTO,
  ) {
    console.log(body);

    const filename = body.objectKey
      ? `${user.company}/${uuidv4()}.${body.objectKey.split('.').pop()}`
      : `${user.company}/${uuidv4()}`;
    // 创建ObsClient实例
    const obsClient = new ObsClient(this.config.get('huawei.obs'));
    const meta = {};
    for (const key in body) {
      if (Object.prototype.hasOwnProperty.call(body, key)) {
        meta['x-obs-meta-' + key] = body[key];
      }
    }
    const formParams = Object.assign(
      {
        'x-obs-acl': 'public-read',
        'content-type': mime.lookup(body.objectKey),
      },
      meta,
    );
    console.log(meta);

    const res = obsClient.createPostSignatureSync({
      Expires: 3600,
      FormParams: formParams,
    });
    const url = `http://${this.config.get(
      'huawei.obs.Bucket',
    )}.${this.config.get('huawei.obs.server')}/`;
    return {
      url,
      objectUrl: url + filename,
      formData: Object.assign(
        {
          Policy: res.Policy,
          signature: res.Signature,
        },
        formParams,
        {
          key: filename,
          accessKeyId: this.config.get('huawei.obs.access_key_id'),
        },
      ),
    };
  }
}
