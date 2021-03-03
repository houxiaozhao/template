import { Injectable, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import HuaweiSms from 'src/common/util/sms';
import { CacheService } from 'src/common/processors/cache/cache.service';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
@Injectable()
export class UtilService {
  constructor(
    private readonly config: ConfigService,
    private readonly cacheService: CacheService,
  ) {}
  randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  async sendVerificationCode(phone: string) {
    // 验证码
    if (await this.cacheService.get(`verificationCode:${phone}`)) {
      throw new ApiException(
        '验证码在有效期,15分钟有效,请勿频繁获取',
        ApiErrorCode.VERIFICATION_CODE_IS_VALID,
        HttpStatus.BAD_REQUEST,
      );
    }
    const code = this.randomString(6, '0123456789');

    try {
      await HuaweiSms(
        this.config.get('huawei.VerificationCodeSMS.appKey'),
        this.config.get('huawei.VerificationCodeSMS.appSecret'),
        this.config.get('huawei.VerificationCodeSMS.realUrl'),
        this.config.get('huawei.VerificationCodeSMS.signature'),
        this.config.get('huawei.VerificationCodeSMS.sender'),
        this.config.get('huawei.VerificationCodeSMS.templateId'),
        ['+86' + phone],
        [code],
      );
      await this.cacheService.set(`verificationCode:${phone}`, code, {
        ttl: 60 * 15,
      });
    } catch (error) {
      Logger.error(error);
      throw new ApiException(
        '短信发送失败,请重试',
        ApiErrorCode.VERIFICATION_CODE_IS_VALID,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
