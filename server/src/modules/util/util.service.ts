import { Injectable, Inject, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import HuaweiSms from 'src/common/util/sms';
import { CacheService } from 'src/common/processors/cache/cache.service';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import recur from 'date-recur';
import moment from 'moment';
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
    // return {
    //   phone,
    //   code,
    // };
  }
  generateRecurDate(
    start: string,
    end: string,
    measure: 'day' | 'week' | 'month' | 'year',
    ...args: any[]
  ) {
    console.log(start, end, measure, args);

    const r = recur(start, end);
    // r.setDailyInterval(1); // 每天
    // r.setDailyInterval(2); //每两天
    // r.setDaysOfWeek(1)//每周一
    // r.setDaysOfWeek([1, 2]); //每周一周二
    // r.setWeeklyInterval(2).setDaysOfWeek(1); //每隔一周周一
    // r.setWeeklyInterval(3).setDaysOfWeek([1, 3]); //每三周周一周三
    // r.setDaysOfMonth(1); //每月一号
    // r.setMonthlyInterval(2).setDaysOfMonth([1, 3, 4]); //每两个月的一号
    // r.setYearlyInterval(2).setDaysOfMonth([3, 19]).setMonthsOfYear([11]); //每两年的11月的3号和19号
    switch (measure) {
      case 'day':
        r.setDailyInterval(args[0]);
        break;
      case 'week':
        r.setWeeklyInterval(args[0]).setDaysOfWeek(args[1]);
        break;
      case 'month':
        r.setMonthlyInterval(args[0]).setDaysOfMonth(args[1]);
        break;
      case 'year':
        r.setYearlyInterval(args[0])
          .setDaysOfMonth(args[1])
          .setMonthsOfYear(args[2]);
        break;

      default:
        break;
    }
    const dates: string[] = [];
    all(moment(new Date(start)));
    function all(time) {
      if (r.matches(time.toDate())) {
        dates.push(time.format('L'));
      }
      if (
        time.isBetween(
          moment(new Date(start)),
          moment(new Date(end)),
          'day',
          '[]',
        )
      ) {
        all(time.add(1, 'day'));
      }
    }
    return dates;
  }
}
