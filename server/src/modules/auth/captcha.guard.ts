import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import { ApiException } from 'src/common/exceptions/api.exception';
import { AuthService } from './auth.service';

@Injectable()
export class CaptchaGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.body.uuid || !request.body.code) {
      throw new ApiException(
        '缺少验证码',
        ApiErrorCode.MISSING_CAPTCHA,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.authService.validateCaptcha(
      request.body.uuid,
      request.body.code,
    );
  }
}
