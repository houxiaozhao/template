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
        <el-table-column prop="title" label="名称"></el-table-column>
        <el-table-column prop="remarks" label="备注"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <el-table-column prop="icon" label="图标"></el-table-column>
        <el-table-column prop="path" label="路径"></el-table-column>
        <el-table-column prop="parent.title" label="父菜单"></el-table-column>
        <el-table-column prop="order" label="排序"></el-table-column>
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
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="removeData(scope.row)"
              >删除</el-button
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
      :data="menuTree"
      :highlight-current="true"
      :default-expand-all="true"
      :expand-on-click-node="false"
      :props="{ label: 'title' }"
    >
      <span
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
        slot-scope="{ node, data }"
      >
        <span>{{ node.label }}</span>
        <el-button
          type="text"
          size="mini"
          @click="
            () => {
              editDataForm = JSON.parse(JSON.stringify(data));
              editDataDialog = true;
            }
          "
        >
          编辑
        </el-button>
      </span>
    </el-tree>

    <el-dialog title="添加" :visible.sync="addDataDialog" width="50%">
      <el-form
        ref="addDataForm"
        :model="addDataForm"
        :rules="addRules"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="名称" prop="title">
          <el-input v-model="addDataForm.title"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="addDataForm.remarks"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-radio-group v-model="addDataForm.type">
            <el-radio label="菜单">菜单</el-radio>
            <el-radio label="菜单组">菜单组</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="图标" prop="icon">
          <el-input v-model="addDataForm.icon"></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="path">
          <el-input v-model="addDataForm.path"></el-input>
        </el-form-item>
        <el-form-item label="父菜单" prop="parent">
          <el-popover placement="top" width="300" v-model="addmenuTreeVisible">
            <el-tree
              :data="menuTree"
              :highlight-current="true"
              :default-expand-all="true"
              :expand-on-click-node="false"
            >
              <span
                class="flex justify-between align-center"
                style="flex: 1"
                slot-scope="{ data }"
              >
                <span>{{ data.title }}</span>
                <el-button
                  v-if="data.type === '菜单组'"
                  @click="
                    () => {
                      addDataForm.parent = data;
                    }
                  "
                  type="text"
                  size="mini"
                  >选择</el-button
                >
              </span>
            </el-tree>
            <div style="text-align: right; margin-top: 10px">
              <el-button
                type="primary"
                size="mini"
                @click="addmenuTreeVisible = false"
                >确定</el-button
              >
            </div>
            <el-button slot="reference">{{
              addDataForm.parent._id ? addDataForm.parent.title : "选择"
            }}</el-button>
          </el-popover>
          <el-button
            v-if="addDataForm.parent._id"
            type="text"
            style="margin-left: 10px"
            @click="addDataForm.parent = {}"
            >清除</el-button
          >
        </el-form-item>
        <el-form-item label="排序" prop="order">
          <el-input type="number" v-model="addDataForm.order"></el-input>
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
        <el-form-item label="名称" prop="title">
          <el-input v-model="editDataForm.title"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="editDataForm.remarks"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-radio-group v-model="editDataForm.type">
            <el-radio label="菜单">菜单</el-radio>
            <el-radio label="菜单组">菜单组</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="图标" prop="icon">
          <el-input v-model="editDataForm.icon"></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="path">
          <el-input v-model="editDataForm.path"></el-input>
        </el-form-item>
        <el-form-item label="父菜单" prop="parent">
          <el-popover placement="top" width="300" v-model="editmenuTreeVisible">
            <el-tree
              :data="menuTree"
              :highlight-current="true"
              :default-expand-all="true"
              :expand-on-click-node="false"
            >
              <span
                class="flex justify-between align-center"
                style="flex: 1"
                slot-scope="{ data }"
              >
                <span>{{ data.title }}</span>
                <el-button
                  v-if="data.type === '菜单组'"
                  @click="
                    () => {
                      editDataForm.parent = data;
                    }
                  "
                  type="text"
                  size="mini"
                  >选择</el-button
                >
              </span>
            </el-tree>
            <div style="text-align: right; margin-top: 10px">
              <el-button
                type="primary"
                size="mini"
                @click="editmenuTreeVisible = false"
                >确定</el-button
              >
            </div>
            <el-button slot="reference">{{
              editDataForm.parent && editDataForm.parent._id
                ? editDataForm.parent.title
                : "选择"
            }}</el-button>
          </el-popover>
          <el-button
            v-if="editDataForm.parent && editDataForm.parent._id"
            type="text"
            style="margin-left: 10px"
            @click="editDataForm.parent = {}"
            >清除</el-button
          >
        </el-form-item>
        <el-form-item label="排序" prop="order">
          <el-input type="number" v-model="editDataForm.order"></el-input>
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
        title: '', // {string} *
        remarks: '',
        type: '菜单组', // {string} *
        icon: '', // {string} *
        path: '', // {string} *
        parent: {}, // {string} *
        order: 0 // {number} *
      },
      editDataDialog: false,
      editDataForm: {
        title: '', // {string} *
        remarks: '',
        type: '菜单组', // {string} *
        icon: '', // {string} *
        path: '', // {string} *
        parent: {}, // {string} *
        order: 0 // {number} *
      },
      addRules: {
        title: [{
          required: true,
          message: '请输入名称',
          trigger: 'blur'
        }]
      },
      editRules: {
        title: [{
          required: true,
          message: '请输入名称',
          trigger: 'blur'
        }]
      },
      menuTree: [],
      addmenuTreeVisible: false,
      editmenuTreeVisible: false
    }
  },
  mounted () {
    this.getData()
    this.getMenuTree()
  },
  methods: {
    getMenuTree () {
      this.$api.get_menu_menutree().then(res => {
        console.log(res.data)
        this.menuTree = res.data
      })
    },
    getData () {
      this.loading = true
      this.$api.get__menu({
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
    removeData (data) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$api.delete_menu_id({
          id: data._id
        }).then(res => {
          if (res.code === 0) {
            this.getData()
            this.getMenuTree()
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
    addData () {
      this.$refs.addDataForm.validate((valid) => {
        if (valid) {
          this.$api.post__menu({
            title: this.addDataForm.title, // {string} *
            remarks: this.addDataForm.remarks, // {string} *
            type: this.addDataForm.type, // {string} *
            icon: this.addDataForm.icon, // {string} *
            path: this.addDataForm.path, // {string} *
            parent: this.addDataForm.parent._id ? this.addDataForm.parent : '', // {string} *
            order: this.addDataForm.order // {number} *
          }).then(res => {
            if (res.code === 0) {
              this.getData()
              this.getMenuTree()
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
    editData () {
      this.$refs.editDataForm.validate((valid) => {
        if (valid) {
          this.$api.put_menu_id({
            id: this.editDataForm._id,
            title: this.editDataForm.title, // {string} *
            remarks: this.editDataForm.remarks, // {string} *
            type: this.editDataForm.type, // {string} *
            icon: this.editDataForm.icon, // {string} *
            path: this.editDataForm.path, // {string} *
            parent: this.editDataForm.parent, // {string} *
            order: this.editDataForm.order // {number} *
          }).then(res => {
            if (res.code === 0) {
              this.getData()
              this.getMenuTree()
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
