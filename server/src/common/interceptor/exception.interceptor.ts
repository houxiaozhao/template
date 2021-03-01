import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiException } from '../exceptions/api.exception';
import { MongoError } from 'mongodb';
import { ApiErrorCode } from '../enums/api.error.code.enum';
/**
 * 全局异常的拦截器。在此处判断异常类型
 * 自定义异常后，在此处判断异常类型，统一返回格式
 */
@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(
        err => {
          Logger.error(err);
          if (err instanceof ApiException) {
            return throwError(err);
          }
          if (err instanceof MongoError) {
            throw new ApiException(
              err.message,
              ApiErrorCode.BAD_REQUEST,
              HttpStatus.BAD_REQUEST,
            );
          }
          if (err.response && err.status) {
            return throwError(
              new HttpException(
                {
                  message: err.response.message,
                  errorCode: err.response.errorCode,
                },
                err.status,
              ),
            );
          }
          if (err.message) {
            return throwError(
              new HttpException(
                {
                  message: err.message,
                  errorCode: 502,
                },
                HttpStatus.BAD_GATEWAY,
              ),
            );
          }
          return throwError(
            new HttpException(
              {
                message: '未知错误',
                errorCode: '-1',
              },
              HttpStatus.BAD_GATEWAY,
            ),
          );
        },
        // throwError(new HttpException('New message', HttpStatus.BAD_GATEWAY)),
      ),
    );
  }
}
