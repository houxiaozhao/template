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
          <el-button
            style="margin-bottom: 5px"
            size="mini"
            @click="getData"
          >刷新
          </el-button>
          <el-button
            style="margin-bottom: 5px"
            size="mini"
            @click="addDataDialog=true"
          >新增
          </el-button>
        </div>
      </div>
    </template>
    <div style="margin: 15px 0">
      <el-table
        :data="data.docs"
        style="width: 100%"
        size="mini"
        stripe
      >
        <el-table-column
          prop="alias"
          label="名称"
        ></el-table-column>
        <el-table-column
          prop="method"
          label="方法"
        ></el-table-column>
        <el-table-column
          prop="url"
          label="地址"
        ></el-table-column>
        <el-table-column label="验证">
          <template slot-scope="scope">
            {{ scope.row.verification ? '验证' : '不验证' }}
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ new Date(scope.row.createdAt)|date_format }}
          </template>
        </el-table-column>
        <el-table-column
          label="编辑"
          width="200"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              @click="()=>{editDataForm=JSON.parse(JSON.stringify(scope.row));editDataDialog=true}"
            >编辑
            </el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="removeData(scope.row)"
            >删除
            </el-button>
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
      @current-change="(e)=>{this.pagination.page=e;getData()}"
    >
    </el-pagination>
    <el-dialog
      title="添加"
      :visible.sync="addDataDialog"
      width="50%"
    >
      <el-form
        ref="addDataForm"
        :model="addDataForm"
        :rules="addRules"
        label-width="80px"
        size="mini"
      >
        <el-form-item
          label="名称"
          prop="name"
        >
          <el-input v-model="addDataForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="addDataDialog = false">取 消</el-button>
        <el-button
          type="primary"
          @click="addData"
        >确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑"
      :visible.sync="editDataDialog"
      width="50%"
    >
      <el-form
        ref="editDataForm"
        :model="editDataForm"
        :rules="editRules"
        label-width="80px"
        size="mini"
      >
        <el-form-item
          label="名称"
          prop="name"
        >
          <el-input v-model="editDataForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="editDataDialog = false">取 消</el-button>
        <el-button
          type="primary"
          @click="editData"
        >确 定</el-button>
      </span>
    </el-dialog>
  </d2-container>
</template>

<script>

import { delete__api_id, get__api, post__api, put__api_id } from '@/api/api管理'

export default {
  name: 'demo',
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
        name: ''
      },
      editDataDialog: false,
      editDataForm: {
        name: ''
      },
      addRules: {
        name: [{
          required: true,
          message: '请输入名称',
          trigger: 'blur'
        }]
      },
      editRules: {
        name: [{
          required: true,
          message: '请输入名称',
          trigger: 'blur'
        }]
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      get__api({
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
          post__api({
            name: this.addDataForm.name
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
        delete__api_id({ id: data._id }).then(res => {
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
          put__api_id({
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
