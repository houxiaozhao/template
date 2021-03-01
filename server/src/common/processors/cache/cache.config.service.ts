/**
 * Cache config service.
 * @file Cache 配置器
 * @module processor/cache/config.service
 * @author Surmon <https://github.com/surmon-china>
 */

import { throttle } from 'lodash';
import * as redisStore from 'cache-manager-redis-store';
import { ClientOpts, RetryStrategyOptions } from 'redis';
import {
  CacheModuleOptions,
  CacheOptionsFactory,
  Injectable,
  Logger,
} from '@nestjs/common';
// import * as APP_CONFIG from '@app/app.config';
import { ConfigService } from 'nestjs-config';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  // 发送告警邮件（半分钟节流）
  private sendAlarmMail = throttle((error: string) => {
    Logger.error(error);
    // this.emailService.sendMail({
    //   to: APP_CONFIG.EMAIL.admin,
    //   subject: `${APP_CONFIG.APP.NAME} Redis 发生异常！`,
    //   text: error,
    //   html: `<pre><code>${error}</code></pre>`,
    // });
  }, 1000 * 30);

  // 重试策略
  public retryStrategy(options: RetryStrategyOptions) {
    Logger.error(options.error, 'Reids 发生异常！');
    this.sendAlarmMail(String(options.error));

    if (options?.error?.code === 'ECONNREFUSED') {
      return new Error('Redis 服务器拒绝连接！');
    }
    if (options.total_retry_time > 1000 * 60) {
      return new Error('Redis 重试时间已用完！');
    }
    if (options.attempt > 6) {
      return new Error('Redis 尝试次数已达极限！');
    }

    return Math.min(options.attempt * 100, 3000);
  }

  // 缓存配置
  public createCacheOptions(): CacheModuleOptions {
    const redisOptions: ClientOpts = {
      host: this.config.get('redis.host'),
      port: this.config.get('redis.post'),
      password: this.config.get('redis.password'),
      db: this.config.get('redis.db'),
      retry_strategy: this.retryStrategy.bind(this),
    };
    this.config.get('redis')
    console.log(redisOptions);
    return {
      store: redisStore,
      ttl: this.config.get('redis.ttl'),
      // https://github.com/dabroek/node-cache-manager-redis-store/blob/master/CHANGELOG.md#breaking-changes
      // Any value (undefined | null) return true (cacheable) after redisStore v2.0.0
      is_cacheable_value: () => true,
      ...redisOptions,
    };
  }
}
