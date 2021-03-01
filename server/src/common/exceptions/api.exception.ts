import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from './../enums/api.error.code.enum';

// 抛出api异常
// throw new ApiException('ID无效', ApiErrorCode.ID_INVALID, HttpStatus.BAD_REQUEST);

export class ApiException extends HttpException {
  private errorMessage: string;
  private errorCode: ApiErrorCode;

  constructor(
    errorMessage: string, // 错误消息
    errorCode: ApiErrorCode, //错误码
    statusCode: HttpStatus, // 状态码
  ) {
    super(errorMessage, statusCode);
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }

  getErrorCode(): ApiErrorCode {
    return this.errorCode;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }
}
