<template>
  <d2-container>
    <div
      style="
        padding: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      "
    >
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>重置密码</span>
        </div>
        <div class="change-password" style="border-radius: 20px">
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
        </div>
      </el-card>
    </div>
  </d2-container>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
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
    this.formLogin.phone = this.info.phone
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
</style>
