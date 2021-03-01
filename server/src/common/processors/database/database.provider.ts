/**
 * Database providers.
 * @file Database 模块构造器
 * @module processor/database/providers
 * @author Surmon <https://github.com/surmon-china>
 */

import * as mongoose from 'mongoose';
// import { EmailService } from '@app/processors/helper/helper.service.email';
import { DB_CONNECTION_TOKEN } from 'src/common/constants/system.constant';
import { ConfigService } from 'nestjs-config';
import { Logger } from '@nestjs/common';

export const databaseProvider = {
  inject: [ConfigService],
  provide: DB_CONNECTION_TOKEN,
  useFactory: async (config: ConfigService) => {
    let reconnectionTask = null;
    const RECONNET_INTERVAL = 6000;

    // // 发送告警邮件
    // const sendAlarmMail = (error: string) => {
    //   emailService.sendMail({
    //     to: APP_CONFIG.EMAIL.admin,
    //     subject: `${APP_CONFIG.APP.NAME} 数据库发生异常！`,
    //     text: error,
    //     html: `<pre><code>${error}</code></pre>`,
    //   });
    // };

    // 连接数据库
    function connection() {
      return mongoose.connect(config.get('database.uri'),config.get('database.options'));
    }

    mongoose.connection.on('connecting', () => {
      Logger.log('数据库连接中...')
    });

    mongoose.connection.on('open', () => {
      Logger.log('数据库连接成功！');
      clearTimeout(reconnectionTask);
      reconnectionTask = null;
    });

    mongoose.connection.on('disconnected', () => {
      Logger.error(`数据库失去连接！尝试 ${RECONNET_INTERVAL / 1000}s 后重连`);
      reconnectionTask = setTimeout(connection, RECONNET_INTERVAL);
    });

    mongoose.connection.on('error', error => {
      Logger.error('数据库发生异常！', error);
      mongoose.disconnect();
      // sendAlarmMail(String(error));
    });

    return await connection();
  },
};
