import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';
import { Request, Response } from 'express';

// 创建一个异常
// 最好不要直接创建http异常，直接被拦截到此处
// throw new HttpException(
//   {message: '请求参数id 必传', error: 'id is required' },
//   HttpStatus.BAD_REQUEST,
// );
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    Logger.log(
      '----------------------------------------------------------------',
    );
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof ApiException) {
      Logger.error('api异常');

      response.status(200).json({
        status: exception.getStatus(),
        timestamp: new Date().getTime(),
        path: request.url,
        errorCode: exception.getErrorCode(),
        message: exception.getErrorMessage(),
      });
      // response.status(status).json({
      //   status,
      //   timestamp: new Date().toISOString(),
      //   path: request.url,
      //   errorCode: exception.getErrorCode(),
      //   message: exception.getErrorMessage(),
      // });
    } else if (exception instanceof HttpException) {
      Logger.error('Http异常');
      const exceptionRes: any = exception.getResponse();
      const { errorCode, message } = exceptionRes;
      response.status(200).json({
        status: exception.getStatus(),
        timestamp: new Date().getTime(),
        path: request.url,
        errorCode,
        message,
      });
    } else {
      Logger.error('其他异常');
      response.status(200).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        timestamp: new Date().getTime(),
        path: request.url,
        errorCode: '500',
        message: '服务器异常',
      });
    }
  }
}
