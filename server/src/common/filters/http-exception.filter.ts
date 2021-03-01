import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

// 创建一个异常
// 最好不要直接创建http异常，直接被拦截到此处
// throw new HttpException(
//   {message: '请求参数id 必传', error: 'id is required' },
//   HttpStatus.BAD_REQUEST,
// );
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    if (exception instanceof ApiException) {
      response.status(status).json({
        status,
        timestamp: new Date().toISOString(),
        path: request.url,
        errorCode: exception.getErrorCode(),
        message: exception.getErrorMessage(),
      });
    } else {
      const exceptionRes: any = exception.getResponse();
      const { errorCode, message } = exceptionRes;
      response.status(status).json({
        status,
        timestamp: new Date().toISOString(),
        path: request.url,
        errorCode,
        message,
      });
    }
  }
}
