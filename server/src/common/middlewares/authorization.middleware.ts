// 不使用中间件验证权限
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { UserService } from 'src/modules/user/user.service';

// /**
//  * 接口权限验证中间件
//  */
// @Injectable()
// export class AuthzMiddleware implements NestMiddleware {
//   constructor(private userService: UserService) {}
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   use(req: Request, res: Response, next: Function) {
//     next();

//     const routeName = req.route.path
//       .split('/')
//       .map(e => {
//         if (e.startsWith(':')) {
//           return `{${e.substr(1)}}`;
//         }
//         return e;
//       })
//       .join('/');
//     console.log(req.method, routeName);
//     // TODO:
//     console.log(req.user);

//     // this.userService.verificationCan()
//   }
// }
