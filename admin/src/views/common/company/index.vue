<template>
  <d2-container>
    <template slot="header">
      <div class="flex justify-between align-center">
        <div>
          <el-input
            v-model="search"
            clearable
            size="mini"
            placeholder="输入名称搜索"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getData"
            ></el-button>
          </el-input>
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
      <el-table :data="data.docs" style="width: 100%" size="mini" stripe>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">{{
            new Date(scope.row.createdAt) | date_format
          }}</template>
        </el-table-column>
        <el-table-column label="编辑" width="200">
          <template slot-scope="scope">
            <el-button
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
    <el-tree
      :data="companyTree"
      :highlight-current="true"
      :default-expand-all="true"
      :expand-on-click-node="false"
      :props="{ label: 'name' }"
    ></el-tree>
    <el-dialog
      title="添加"
      :visible.sync="addDataDialog"
      width="50%"
      append-to-body
    >
      <el-form
        ref="addDataForm"
        :model="addDataForm"
        :rules="addRules"
        label-width="100px"
        size="mini"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="addDataForm.name"></el-input>
        </el-form-item>
        <el-form-item label="管理员手机号" prop="phone">
          <el-input v-model="addDataForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="管理员用户名" prop="username">
          <el-input v-model="addDataForm.username"></el-input>
        </el-form-item>
        <el-form-item label="管理员密码" prop="password">
          <el-input v-model="addDataForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="管理员权限" prop="permissions">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="(item, index) in addDataForm.permissions"
              :key="item._id"
              style="margin: 0 2px"
              closable
              @close="
                (e) => {
                  addDataForm.permissions.splice(index, 1);
                }
              "
              >{{ item.alias }}</el-tag
            >
          </div>
          <el-popover
            placement="bottom"
            width="500"
            v-model="addChoosePermissionVisible"
          >
            <choosePermission
              :choosed="addDataForm.permissions"
              @choose="
                (e) => {
                  addDataForm.permissions.push(e);
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
    <el-dialog
      title="编辑"
      :visible.sync="editDataDialog"
      width="50%"
      append-to-body
    >
      <el-form
        ref="editDataForm"
        :model="editDataForm"
        :rules="editRules"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="editDataForm.name"></el-input>
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
import choosePermission from './choose_permission'
export default {
  name: 'demo',
  components: { choosePermission },
  data () {
    return {
      search: '',
      loading: false,
      pagination: {
        page: 1,
        limit: 10,
        total: 0
      },
      data: {
        docs: []
      },
      addDataDialog: false,
      addDataForm: {
        name: '',
        level: '',
        address: '',
        postcode: '',
        industry: {},
        parent: {},
        phone: '',
        username: '',
        password: '',
        permissions: []
      },
      editDataDialog: false,
      editDataForm: {
        name: '',
        level: '',
        address: '',
        address2: {},
        postcode: '',
        industry: {},
        parent: {}
      },
      addRules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        level: [{ required: true, message: '请输入等级', trigger: 'blur' }]
      },
      editRules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        level: [{ required: true, message: '请输入等级', trigger: 'blur' }]
      },
      addChooseIndustryVisible: false,
      addChoosecompanyVisible: false,
      addChoosePermissionVisible: false,
      editChooseIndustryVisible: false,
      editChoosecompanyVisible: false,
      editChoosePermissionVisible: false,
      companyTree: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    change (e) {
      console.log(e)
      this.editDataForm.address2 = {}
    },
    getData () {
      this.loading = true
      this.$api.get__company({
        page: this.pagination.page,
        limit: this.pagination.limit,
        search: this.search
      }).then(res => {
        if (res.code === 0) {
          this.data = res.data
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
          this.$api.post__company({
            name: this.addDataForm.name,
            phone: this.addDataForm.phone,
            username: this.addDataForm.username,
            password: this.addDataForm.password,
            permissions: this.addDataForm.permissions
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
        this.$api.delete_company_id({ id: data._id }).then(res => {
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
          this.$api.put_company_id({
            id: this.editDataForm._id,
            name: this.editDataForm.name
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
