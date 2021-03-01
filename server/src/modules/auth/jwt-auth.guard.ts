import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import { ApiException } from 'src/common/exceptions/api.exception';

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user) {
    if (err || !user) {
      throw new ApiException(
        '认证失败,token错误',
        ApiErrorCode.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
