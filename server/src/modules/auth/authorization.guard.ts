import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';
import { find } from 'lodash';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiService } from '../admin/api/api.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly apiService: ApiService,
    private readonly userService: UserService,
  ) {}
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
    const api = await this.apiService.getByUrl(routeName);
    if (!api.verification) {
      return true;
    }
    const apis = await this.userService.getUserApis(request.user.userid);
    if (
      !find(apis, {
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
