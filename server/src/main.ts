import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { ErrorsInterceptor } from './common/interceptor/exception.interceptor';
import { Logger, ValidationPipe } from '@nestjs/common';
// import * as expressListRoutes from 'express-list-routes';

// import * as csurf from 'csurf';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get('ConfigService');
  app.enableCors();
  // app.use(csurf());
  app.useGlobalFilters(new HttpExceptionFilter()); // 异常过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); // 请求成功拦截器
  app.useGlobalInterceptors(new ErrorsInterceptor()); // 异常拦截器
  app.useGlobalPipes(new ValidationPipe());
  if (config.get('common.node_env') === 'dev') {
    const swaggerOptions = new DocumentBuilder()
      .setTitle('接口文档')
      .setDescription('nest starter project api document')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('doc', app, document);
  }
  await app.listen(config.get('common.port'));
  Logger.log('当前环境：' + config.get('common.node_env'));
  Logger.log('数据链接：' + config.get('database.uri'));
  Logger.log('启动成功：http://127.0.0.1:' + config.get('common.port'));
  if (config.get('common.node_env') === 'dev')
    Logger.log(
      '文档地址：http://127.0.0.1:' + config.get('common.port') + '/doc',
    );
  //   const server = app.getHttpServer();
  //   const router = server._events.request._router;
  // console.log(expressListRoutes({}, 'API:', router));
}
bootstrap();
