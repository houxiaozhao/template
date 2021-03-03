import { HttpStatus, Injectable } from '@nestjs/common';
import ObsClient = require('esdk-obs-nodejs');
import { ConfigService } from 'nestjs-config';
import { UserType } from 'src/common/interfaces/user.interface';
import * as fs from 'fs';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExifImage = require('exif').ExifImage;

@Injectable()
export class FileService {
  constructor(private readonly config: ConfigService) {}
  async upload(file, user: UserType): Promise<string> {
    const Bucket = this.config.get('huawei.obs.Bucket');
    const filename = file.filename;
    let url = '';
    try {
      await this.huaweiPutObject(
        this.config.get('huawei.obs'),
        Bucket,
        user.company + '/' + filename,
        file.path,
      );
      url = `https://${Bucket}.${this.config.get('huawei.obs.server')}/${
        user.company
      }/${filename}`;
    } catch (error) {
      throw new ApiException(
        '上传出错',
        ApiErrorCode.ERROR_IN_FILE_UPLOAD,
        HttpStatus.BAD_REQUEST,
      );
    } finally {
      fs.unlinkSync(file.path);
      return url;
    }
  }
  huaweiPutObject(config, Bucket, Key, SourceFile) {
    const obsClient = new ObsClient(config);
    return new Promise((res, rej) => {
      obsClient.putObject(
        {
          Bucket,
          Key,
          SourceFile,
        },
        (err, result) => {
          if (err) {
            rej(err);
          } else {
            res(result);
          }
        },
      );
    });
  }
  exif(path) {
    return new Promise((resolve, reject) => {
      try {
        new ExifImage({ image: path }, (error, exifData) => {
          if (error) {
            reject(error);
          } else {
            resolve(exifData);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  getObjectMetadata(key) {
    const obsClient = new ObsClient(this.config.get('huawei.obs'));
    const Bucket = this.config.get('huawei.obs.Bucket');
    return new Promise((resolve, reject) => {
      try {
        obsClient.getObjectMetadata(
          {
            Bucket: Bucket,
            Key: key,
          },
          (err, result) => {
            if (err) {
              console.error('Error-->' + err);
              reject(err);
            } else {
              resolve(result);
            }
          },
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}
