import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';
import { find } from 'lodash';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import { ApiException } from 'src/common/exceptions/api.exception';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const routeName = request.route.path
      .split('/')
      .map(e => {
        if (e.startsWith(':')) {
          return `{${e.substr(1)}}`;
        }
        return e;
      })
      .join('/');
    if (
      !find(request.user.apis, {
        method: request.method,
        url: routeName,
      })
    ) {
      throw new ApiException(
        '没有权限，获取失败',
        ApiErrorCode.FORBIDDEN,
        HttpStatus.FORBIDDEN,
      );
    }
    return true;
  }
}
