import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpStatus,
} from '@nestjs/common';
import { ApiErrorCode } from '../enums/api.error.code.enum';
import { ApiException } from '../exceptions/api.exception';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: any, metadata: ArgumentMetadata) {
    // 不传数据,原路返回
    if (typeof value === 'undefined') {
      return value;
    }
    const isNumeric =
      ['string', 'number'].includes(typeof value) &&
      !isNaN(parseFloat(value)) &&
      isFinite(value);
    if (!isNumeric) {
      throw new ApiException(
        'ID无效',
        ApiErrorCode.ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
    return parseInt(value, 10);
  }
}
