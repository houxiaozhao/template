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
            <img
              style="height: 103px; width: 336px"
              :src="`${$baseUrl}image/logo.png`"
            />
            <div style="font-size: 36px; color: #fff; margin-top: 20px">
              观颐智能
            </div>
            <div style="font-size: 36px; color: #fff">
              无人机后台数据管理系统
            </div>
          </div>
          <div
            class="reset-password"
            style="
              padding: 30px;
              border: 1px #eee solid;
              border-radius: 20px;
              background-color: rgb(204 204 204 / 0.3);
            "
          >
            <div
              style="
                text-align: center;
                font-size: 24px;
                margin: 10px 0;
                color: #fff;
              "
            >
              重置密码
            </div>
            <el-form
              ref="loginForm"
              :model="formLogin"
              size="default"
              :rules="rules"
              label-width="80px"
            >
              <el-form-item label="手机号" prop="phone">
                <el-input
                  type="text"
                  v-model="formLogin.phone"
                  placeholder="手机号"
                  name="phone"
                >
                  <template slot="append">
                    <el-button
                      :disabled="!formLogin.phone"
                      @click="get_auth_verificationCode"
                      >获取验证码</el-button
                    >
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="code">
                <el-input
                  placeholder="验证码"
                  v-model="formLogin.code"
                  name="code"
                >
                </el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="password">
                <el-input
                  type="password"
                  placeholder="密码"
                  autocomplete="new-password"
                  v-model="formLogin.password"
                  name="password"
                >
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  @click="submit"
                  size="default"
                  type="primary"
                  class="button-login"
                >
                  确定
                </el-button>
              </el-form-item>
            </el-form>
            <p class="page-login--options" flex="main:justify cross:center">
              <span></span>
              <span @click="$router.back()">返回登陆</span>
            </p>
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
  },
  beforeDestroy () {
  },
  methods: {
    ...mapActions('d2admin/account', [
      'login'
    ]),
    get_auth_verificationCode () {
      console.log('--')
      this.$api.get_auth_verificationCode({ phone: this.formLogin.phone }).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.$message.success('验证码已发送至手机')
        }
      })
    },
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$api.get_auth_retrievePassword(this.formLogin).then(res => {
            if (res.code === 0) {
              this.$message.success('密码修改成功')
              this.$router.back()
            }
          })
        }
      })
    }

  }
}
</script>
<style>
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

.reset-password .el-form-item__label {
  color: #fff;
}
</style>
