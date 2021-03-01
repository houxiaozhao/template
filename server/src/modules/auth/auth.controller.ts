import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import {
  LoginDto,
  ProfileDto,
  SignupDto,
  UserinfoDto,
  verificationCodeLoginDto,
} from './dto/auth.dto';
import { AuthService } from './auth.service';
import { JWTAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import * as svgCaptcha from 'svg-captcha';
import { CacheService } from 'src/common/processors/cache/cache.service';
import { v4 as uuidv4 } from 'uuid';
import { CaptchaGuard } from './captcha.guard';
import { UtilService } from '../util/util.service';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import { ApiException } from 'src/common/exceptions/api.exception';
import { CompanyService } from '../admin/company/company.service';
import { AuthorizationGuard } from './authorization.guard';

@Controller('auth')
@ApiTags('用户认证')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly cacheService: CacheService,
    private readonly utilService: UtilService,
    private readonly companyService: CompanyService,
  ) {}

  // @Post('signup')
  // @ApiBody({
  //   type: SignupDto,
  // })
  // @ApiResponse({
  //   status: 200,
  //   type: UserinfoDto,
  // })
  // //TODO: 验证用户名密码长度
  // async signup(@Body() { username, password }) {
  //   const user = await this.authService.signup(username, password);
  //   return {
  //     _id: user._id,
  //     username: user.username,
  //     access_token: await this.authService.signJWT(user.username, user._id),
  //   };
  // }

  @UseGuards(CaptchaGuard, LocalAuthGuard)
  @ApiOperation({ summary: '用户登陆' })
  @Post('login')
  @ApiBody({
    type: LoginDto,
  })
  @ApiResponse({
    status: 200,
    type: UserinfoDto,
  })
  async login(@Request() req) {
    const menus = await this.userService.getUserMenu(req.user.userid);
    const buttons = await this.userService.getUserButton(req.user.userid);
    const company = await this.companyService.show(req.user.company);
    return {
      _id: req.user.userid,
      phone: req.user.phone,
      username: req.user.username,
      company: company,
      access_token: await this.authService.signJWT(
        req.user.username,
        req.user.userid,
      ),
      menus,
      buttons,
    };
  }

  @ApiOperation({ summary: '用户短信验证码登陆' })
  @Post('verificationCodeLogin')
  @ApiBody({
    type: verificationCodeLoginDto,
  })
  @ApiResponse({
    status: 200,
    type: UserinfoDto,
  })
  @UseGuards()
  async verificationCodeLogin(@Body() body: verificationCodeLoginDto) {
    const cacheCode = await this.cacheService.get(
      `verificationCode:${body.phone}`,
    );
    if (!cacheCode) {
      throw new ApiException(
        '手机号错误',
        ApiErrorCode.PHONE_NUMBER_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (body.code.toLowerCase() !== cacheCode) {
      throw new ApiException(
        '验证码错误',
        ApiErrorCode.VERIFICATION_CODE_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.userService.findByPhone(body.phone);
    await this.cacheService.del(`verificationCode:${body.phone}`);
    return {
      _id: user._id,
      phone: user.phone,
      username: user.username,
      access_token: await this.authService.signJWT(user.username, user._id),
    };
  }

  @UseGuards(JWTAuthGuard, AuthorizationGuard)
  @ApiOperation({ summary: '用户获取信息' })
  @Get('profile')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: ProfileDto,
  })
  async getProfile(@Request() req) {
    const menus = await this.userService.getUserMenu(req.user.userid);
    const buttons = await this.userService.getUserButton(req.user.userid);
    return {
      _id: req.user.userid,
      username: req.user.username,
      phone: req.user.phone,
      menus,
      buttons,
    };
  }

  @Get('svgCaptacha')
  @ApiOperation({ summary: '用户获取验证码,验证码1小时有效' })
  async getSvgCaptcha() {
    const c = svgCaptcha.create({
      ignoreChars: '0o1i',
      noise: 4,
      // color: true,
    });
    const uuid = uuidv4();
    this.cacheService.set('captcha:' + uuid, c.text, { ttl: 60 * 60 });
    return {
      data: c.data,
      uuid: uuid,
    };
  }

  @Get('verificationCode')
  @ApiOperation({ summary: '获取验证码' })
  @ApiQuery({ name: 'phone', required: true })
  async getVerificationCode(@Query('phone') phone) {
    const user = await this.userService.findByPhone(phone);
    if (!user) {
      throw new ApiException(
        '手机号错误',
        ApiErrorCode.PHONE_NUMBER_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.utilService.sendVerificationCode(phone);
    return 'ok';
  }

  @Get('retrievePassword')
  @ApiOperation({ summary: '找回密码' })
  @ApiQuery({ name: 'code', required: true })
  @ApiQuery({ name: 'phone', required: true })
  @ApiQuery({ name: 'password', required: true })
  async retrievePassword(
    @Query('code') code: string,
    @Query('phone') phone,
    @Query('password') password,
  ) {
    const cacheCode = await this.cacheService.get(`verificationCode:${phone}`);
    if (!cacheCode) {
      throw new ApiException(
        '手机号错误',
        ApiErrorCode.PHONE_NUMBER_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (code.toLowerCase() !== cacheCode) {
      throw new ApiException(
        '验证码错误',
        ApiErrorCode.VERIFICATION_CODE_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.userService.findByPhone(phone);
    await this.userService.update(user._id, { password: password });
    await this.cacheService.del(`verificationCode:${phone}`);
  }
}
