<template>
  <d2-container>
    <template slot="header">
      <div class="flex justify-between align-center">
        <div class="flex">
          <el-input
            v-model="search"
            clearable
            size="mini"
            placeholder="输入名称搜索"
            @clear="getData"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getData"
            ></el-button>
          </el-input>
          <el-select
            v-model="role"
            placeholder="请选择角色"
            size="mini"
            style="margin-left: 10px"
            clearable
            @change="getData"
          >
            <el-option
              v-for="item in roles"
              :key="item._id"
              :label="item.alias"
              :value="item._id"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <el-button style="margin-bottom: 5px" size="mini" @click="getData"
            >刷新</el-button
          >
          <el-button
            style="margin-bottom: 5px"
            size="mini"
            @click="addDataDialog = true"
            >新增</el-button
          >
        </div>
      </div>
    </template>
    <div style="margin: 15px 0">
      <el-table :data="data.docs" style="width: 100%" size="mini" stripe border>
        <el-table-column
          align="center"
          prop="phone"
          label="手机号"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="username"
          label="姓名"
        ></el-table-column>
        <el-table-column align="center" label="角色">
          <template slot-scope="scope">
            <el-tag
              v-for="item in scope.row.roles"
              :key="item._id"
              size="mini"
              >{{ item.alias }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="gender"
          label="性别"
        ></el-table-column>
        <el-table-column align="center" label="出生年月">
          <template slot-scope="scope">{{
            new Date(scope.row.birth) | date_format("YYYY-MM-DD")
          }}</template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="code"
          label="工号"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="email"
          label="邮箱"
        ></el-table-column>
        <el-table-column align="center" label="创建时间">
          <template slot-scope="scope">{{
            new Date(scope.row.createdAt) | date_format
          }}</template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="mini"
              icon="el-icon-edit"
              @click="
                () => {
                  editDataForm = JSON.parse(JSON.stringify(scope.row));
                  editDataDialog = true;
                }
              "
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      style="margin: 15px 0"
      layout="prev, pager, next, jumper, ->, total"
      :page-size="pagination.limit"
      :current-page="pagination.page"
      :total="pagination.totalDocs"
      @current-change="
        (e) => {
          this.pagination.page = e;
          getData();
        }
      "
    ></el-pagination>
    <el-dialog title="添加" :visible.sync="addDataDialog" width="50%">
      <el-form
        ref="addDataForm"
        :model="addDataForm"
        :rules="addRules"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="addDataForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="addDataForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="addDataForm.password"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="addDataForm.gender">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addDataForm.email"></el-input>
        </el-form-item>
        <el-form-item label="工号" prop="code">
          <el-input v-model="addDataForm.code"></el-input>
        </el-form-item>
        <el-form-item label="出生年月" prop="birth">
          <el-date-picker
            value-format="timestamp"
            type="date"
            placeholder="选择日期"
            v-model="addDataForm.birth"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <!-- <el-form-item label="照片" prop="photo">
          <el-upload
            class="avatar-uploader"
            :headers="{ Authorization: token }"
            :action="VUE_APP_API + 'user/upload'"
            accept="image/*"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :on-success="
              (res, file) => {
                $set(addDataForm, 'photo', res.data);
              }
            "
          >
            <img
              v-if="addDataForm.photo"
              :src="addDataForm.photo"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item> -->
        <el-form-item label="角色" prop="roles">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="(item, index) in addDataForm.roles"
              :key="item._id"
              style="margin: 0 2px"
              closable
              @close="
                (e) => {
                  addDataForm.roles.splice(index, 1);
                }
              "
              >{{ item.alias }}</el-tag
            >
          </div>
          <el-popover
            placement="bottom"
            width="500"
            v-model="addChooseRolesVisible"
          >
            <chooseRole
              :choosed="addDataForm.roles"
              @choose="
                (e) => {
                  addDataForm.roles.push(e);
                }
              "
            />
            <el-button slot="reference">请选择</el-button>
          </el-popover>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDataDialog = false">取 消</el-button>
        <el-button type="primary" @click="addData">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="editDataDialog" width="50%">
      <el-form
        ref="editDataForm"
        :model="editDataForm"
        :rules="editRules"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input disabled v-model="editDataForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="editDataForm.username"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="editDataForm.gender">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editDataForm.email"></el-input>
        </el-form-item>
        <el-form-item label="工号" prop="code">
          <el-input v-model="editDataForm.code"></el-input>
        </el-form-item>
        <el-form-item label="出生年月" prop="birth">
          <el-date-picker
            value-format="timestamp"
            type="date"
            placeholder="选择日期"
            v-model="editDataForm.birth"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <!-- <el-form-item label="照片" prop="photo">
          <el-upload
            class="avatar-uploader"
            :headers="{ Authorization: token }"
            :action="VUE_APP_API + 'user/upload'"
            accept="image/*"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :on-success="
              (res, file) => {
                $set(editDataForm, 'photo', res.data);
              }
            "
          >
            <img
              v-if="editDataForm.photo"
              :src="editDataForm.photo"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item> -->
        <el-form-item label="角色" prop="roles">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="(item, index) in editDataForm.roles"
              :key="item._id"
              style="margin: 0 2px"
              closable
              @close="
                (e) => {
                  editDataForm.roles.splice(index, 1);
                }
              "
              >{{ item.alias }}</el-tag
            >
          </div>
          <el-popover
            placement="bottom"
            width="500"
            v-model="editChooseRolesVisible"
          >
            <chooseRole
              :choosed="editDataForm.roles"
              @choose="
                (e) => {
                  editDataForm.roles.push(e);
                }
              "
            />
            <el-button slot="reference">请选择</el-button>
          </el-popover>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDataDialog = false">取 消</el-button>
        <el-button type="primary" @click="editData">确 定</el-button>
      </span>
    </el-dialog>
  </d2-container>
</template>

<script>
import util from '@/libs/util'
import chooseRole from './choose_role'
export default {
  name: 'user',
  components: { chooseRole },
  data () {
    return {
      token: 'Bearer ' + util.cookies.get('token'),
      search: '',
      loading: false,
      roles: [],
      role: '',
      pagination: {
        page: 1,
        limit: 10,
        totalDocs: 0
      },
      data: {
        docs: []
      },
      addDataDialog: false,
      addDataForm: {
        phone: '',
        username: '',
        password: '',
        gender: '男',
        email: '',
        code: '',
        birth: '',
        roles: []
      },
      editDataDialog: false,
      editDataForm: {
        username: '',
        password: '',
        gender: '男',
        email: '',
        code: '',
        birth: '',
        roles: []
      },
      addRules: {
        username: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      editRules: {
        username: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }]
      },
      editChooseRolesVisible: false,
      addChooseRolesVisible: false
    }
  },
  mounted () {
    this.getData()
    this.get__role()
  },
  methods: {
    get__role () {
      this.loading = true
      this.$api.get__role({
        page: 1,
        limit: 10000000
      }).then(res => {
        if (res.code === 0) {
          this.roles = res.data.docs
        } else {
          this.$message.warning('获取角色失败')
        }
        this.loading = false
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    },
    beforeUpload (e) {
      console.log(e)
      if (e.size / 1024 > 500) {
        this.$message.warning('图片太大')
        return false
      }
      return true
    },
    getData () {
      this.loading = true
      this.$api.get__user({
        page: this.pagination.page,
        limit: this.pagination.limit,
        search: this.search,
        role: this.role
      }).then(res => {
        if (res.code === 0) {
          this.data = res.data
          this.data.docs = this.data.docs.map(e => {
            e.birth = new Date(e.birth).getTime()
            return e
          })
          this.pagination.totalDocs = res.data.totalDocs
        } else {
          this.$message.warning('获取失败')
        }
        this.loading = false
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    },
    addData () {
      this.$refs.addDataForm.validate((valid) => {
        if (valid) {
          this.$api.post__user({
            phone: this.addDataForm.phone,
            username: this.addDataForm.username,
            password: this.addDataForm.password,
            birth: this.addDataForm.birth,
            gender: this.addDataForm.gender,
            email: this.addDataForm.email,
            code: this.addDataForm.code,
            roles: this.addDataForm.roles
          }).then(res => {
            if (res.code === 0) {
              this.getData()
              this.$message.success('添加成功')
              this.addDataDialog = false
            } else {
              this.$message.warning('添加失败')
            }
          }).catch(() => {
            this.$message.warning('添加失败')
          })
        } else {
          this.$message.warning('填写完整')
          return false
        }
      })
    },
    removeData (data) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.delete_api_id({ id: data._id }).then(res => {
          if (res.code === 0) {
            this.getData()
          } else {
            this.$message.warning('删除失败')
          }
        }).catch(() => {
          this.$message.warning('删除失败')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    editData () {
      this.$refs.editDataForm.validate((valid) => {
        if (valid) {
          this.$api.put_user_id({
            id: this.editDataForm._id,
            username: this.editDataForm.username,
            birth: this.editDataForm.birth,
            gender: this.editDataForm.gender,
            email: this.editDataForm.email,
            code: this.editDataForm.code,
            roles: this.editDataForm.roles
          }).then(res => {
            if (res.code === 0) {
              this.getData()
              this.editDataDialog = false
              this.$message.success('修改成功')
            } else {
              this.$message.warning('修改失败')
            }
          }).catch(() => {
            this.$message.warning('修改失败')
          })
        } else {
          this.$message.warning('填写完整')
          return false
        }
      })
    }
  }
}
</script>
