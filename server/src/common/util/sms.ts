import https = require('https'); // 引入https模块
import url = require('url'); // 引入url模块
import querystring = require('querystring'); // 引入querystring模块
import crypto = require('crypto');
import util = require('util');
/**
 *
 * @param appKey
 * @param appSecret
 * @param realUrl
 * @param signature 华为云短信测试
 * @param sender 99200620888880001320 国内短信签名通道号或国际/港澳台短信通道号
 * @param templateId 4f4a6d20814c47c28f75177d04f5167f 模板ID
 * @param receivers receivers 手机号
 * @param templateParams templateParams
 */
export default function HuaweiSms(
  appKey: string,
  appSecret: string,
  realUrl: string,
  signature: string,
  sender: string,
  templateId: string,
  receivers: Array<string>,
  templateParams: Array<string>,
) {
  // 必填,请参考"开发准备"获取如下数据,替换为实际值
  // const realUrl =
  //   'https://rtcsms.cn-north-1.myhuaweicloud.com:10743/sms/batchSendSms/v1'; // APP接入地址+接口访问URI
  // const appKey = 'cHVfw94Ue02R2wSIy5QF619uul1s'; // APP_Key
  // const appSecret = '6aBieVFjJp79S1pCxQ9SMkeiTigr'; // APP_Secret
  //   const sender = '8820051522368'; // 国内短信签名通道号或国际/港澳台短信通道号
  //   const templateId = '55ae852a6551454d9f21178beebc7fe5'; // 模板ID

  // 条件必填,国内短信关注,当templateId指定的模板类型为通用模板时生效且必填,必须是已审核通过的,与模板类型一致的签名名称
  // 国际/港澳台短信不用关注该参数
  //   const signature = '抖小加'; // 签名名称

  // 必填,全局号码格式(包含国家码),示例:+8615123456789,多个号码之间用英文逗号分隔
  const receiver = receivers.join(','); // 短信接收人号码

  // 选填,短信状态报告接收地址,推荐使用域名,为空或者不填表示不接收状态报告
  const statusCallBack = '';

  /**
   * 选填,使用无变量模板时请赋空值 var templateParas = '';
   * 单变量模板示例:模板内容为"您的验证码是${1}"时,templateParas可填写为'["369751"]'
   * 双变量模板示例:模板内容为"您有${1}件快递请到${2}领取"时,templateParas可填写为'["3","人民公园正门"]'
   * 模板中的每个变量都必须赋值，且取值不能为空
   * 查看更多模板和变量规范:产品介绍>模板和变量规范
   */
  //   const templateParas = '["21训练营","22:22"]'; // 模板变量，此处以单变量验证码短信为例，请客户自行生成6位验证码，并定义为字符串类型，以杜绝首位0丢失的问题（例如：002569变成了2569）。
  const templateParas = JSON.stringify(templateParams); // 模板变量，此处以单变量验证码短信为例，请客户自行生成6位验证码，并定义为字符串类型，以杜绝首位0丢失的问题（例如：002569变成了2569）。

  /**
   * 构造请求Body体
   *
   * @param sender sender
   * @param receiver receiver
   * @param templateId templateId
   * @param templateParas templateParas
   * @param statusCallBack statusCallBack
   * @param signature | 签名名称,使用国内短信通用模板时填写
   * @returns
   */
  function buildRequestBody(
    sender: string,
    receiver: string,
    templateId: string,
    templateParas: string,
    statusCallBack: string,
    signature: string | any[] | null,
  ) {
    if (signature !== null && signature.length > 0) {
      return querystring.stringify({
        from: sender,
        to: receiver,
        templateId,
        templateParas,
        statusCallback: statusCallBack,
        signature,
      });
    }

    return querystring.stringify({
      from: sender,
      to: receiver,
      templateId,
      templateParas,
      statusCallback: statusCallBack,
    });
  }

  /**
   * 构造X-WSSE参数值
   *
   * @param appKey appKey
   * @param appSecret appSecret
   * @returns
   */
  function buildWsseHeader(appKey: string, appSecret: string) {
    const time = new Date(Date.now()).toISOString().replace(/.[0-9]+\Z/, 'Z'); // Created
    const nonce = crypto.randomBytes(64).toString('hex'); // Nonce
    const passwordDigestBase64Str = crypto
      .createHash('sha256')
      .update(nonce + time + appSecret)
      .digest('base64'); // PasswordDigest

    return util.format(
      'UsernameToken Username="%s",PasswordDigest="%s",Nonce="%s",Created="%s"',
      appKey,
      passwordDigestBase64Str,
      nonce,
      time,
    );
  }

  const urlobj = url.parse(realUrl); // 解析realUrl字符串并返回一个 URL对象

  const options = {
    host: urlobj.hostname, // 主机名
    port: urlobj.port, // 端口
    path: urlobj.pathname, // URI
    method: 'POST', // 请求方法为POST
    headers: {
      // 请求Headers
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'WSSE realm="SDP",profile="UsernameToken",type="Appkey"',
      'X-WSSE': buildWsseHeader(appKey, appSecret),
    },
    rejectUnauthorized: false, // 为防止因HTTPS证书认证失败造成API调用失败,需要先忽略证书信任问题
  };
  // 请求Body,不携带签名名称时,signature请填null
  const body = buildRequestBody(
    sender,
    receiver,
    templateId,
    templateParas,
    statusCallBack,
    signature,
  );

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      if (res.statusCode !== 200) {
        reject(res.statusCode);
      }
      res.setEncoding('utf8'); // 设置响应数据编码格式
      res.on('data', d => {
        resolve(d);
      });
    });
    req.on('error', e => {
      reject(e);
    });
    req.write(body); // 发送请求Body数据
    req.end(); // 结束请求
  });
}
