<template>
  <div>
    <div>
      <div
        style="
          height: 100vh;
          background-image: url('image/bg.jpg');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-attachment: fixed;
        "
        flex="dir:top main:justify cross:stretch box:justify"
      >
        <div
          style="
            padding: 200px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          "
        >
          <!-- <img  :src="`${$baseUrl}image/logo2.png`" /> -->
          <!-- form -->
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
            "
          >
            <div style="font-size: 36px; color: #fff">
              管理系统
            </div>
          </div>
          <div
            style="
              padding: 30px;
              border: 1px #eee solid;
              border-radius: 20px;
              background-color: rgb(204 204 204 / 0.3);
            "
            class="login-from"
          >
            <div
              style="
                text-align: center;
                font-size: 24px;
                margin: 10px 0;
                color: #fff;
              "
            >
              用户登陆
            </div>
            <el-form
              ref="loginForm"
              label-position="top"
              :model="formLogin"
              size="default"
              :rules="rules"
            >
              <el-form-item prop="phone">
                <el-input
                  type="text"
                  v-model="formLogin.phone"
                  placeholder="用户名"
                >
                  <i slot="prepend" class="fa fa-user-circle-o"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="formLogin.password"
                  placeholder="密码"
                >
                  <i slot="prepend" class="fa fa-keyboard-o"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input
                  type="text"
                  v-model="formLogin.code"
                  placeholder="验证码"
                >
                  <template slot="append">
                    <div
                      @click="get_auth_svgCaptacha"
                      v-html="svg"
                      class="login-code"
                    ></div>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
            <p class="page-login--options" flex="main:justify cross:center">
              <span>
                <el-checkbox
                  @change="changeRememberPassword"
                  v-model="rememberPassword"
                  >记住密码</el-checkbox
                >
              </span>
              <span @click="$router.push({ name: 'resetpassword' })"
                ><d2-icon name="question-circle" /> 忘记密码</span
              >
            </p>
            <el-button
              size="default"
              @click="submit"
              type="primary"
              class="button-login"
            >
              登录
            </el-button>
          </div>
        </div>
        <div class="page-login--content-footer">
          <p class="page-login--content-footer-copyright">
            Copyright
            <d2-icon name="copyright" />
            2020 sensease 出品
            <!-- <a href="https://github.com/FairyEver">
              @FairyEver
            </a> -->
          </p>
          <p class="page-login--content-footer-options">
            <a href="#">帮助</a>
            <a href="#">隐私</a>
            <a href="#">条款</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import cookies from './../../../libs/util.cookies'
export default {
  data () {
    return {
      formLogin: {
        phone: '',
        password: '',
        code: ''
      },
      rememberPassword: false,
      uuid: '',
      svg: '',
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.get_auth_svgCaptacha()
    try {
      if (cookies.get('RememberPassword') === 'true') {
        this.rememberPassword = true
        console.log(JSON.parse(cookies.get('password')))
        const password = JSON.parse(cookies.get('password'))
        this.formLogin.phone = password.phone
        this.formLogin.password = password.password
      } else {
        this.rememberPassword = false
      }
    } catch (error) {
      console.log(error)
    }
  },
  beforeDestroy () {
  },
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),
    get_auth_svgCaptacha () {
      this.$api.get_auth_svgCaptacha().then(res => {
        this.uuid = res.data.uuid
        this.svg = res.data.data.replace(' height="50" ', ' height="38" ')
      })
    },
    // 提交登录信息
    submit () {
      console.log(this.formLogin)
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (this.rememberPassword) {
            cookies.set('password', {
              phone: this.formLogin.phone,
              password: this.formLogin.password
            })
          } else {
            cookies.remove('password')
          }
          this.login({
            phone: this.formLogin.phone,
            password: this.formLogin.password,
            uuid: this.uuid,
            code: this.formLogin.code
          }).then(() => {
            this.$router.replace(this.$route.query.redirect || '/')
          }).catch(_ => {
            this.get_auth_svgCaptacha()
            this.formLogin.code = ''
          })
        } else {
          // 登录表单校验失败
        }
      })
    },
    changeRememberPassword (e) {
      cookies.set('RememberPassword', e)
    }
  }
}
</script>
<style scoped>
.page-login--content-footer {
  position: fixed;
  bottom: 0;
}
.login-code {
  height: 38px;
  display: block;
  margin: 0 -20px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.login-code svg {
  height: 38px !important;
}
.page-login--options {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #409eff;
  margin-bottom: 15px;
  font-weight: 700;
}
.button-login {
  width: 100%;
}
.login-from .el-checkbox {
  color: #fff;
}
</style>
