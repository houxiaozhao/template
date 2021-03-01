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
          >刷新</el-button>
          <el-button
            style="margin-bottom: 5px"
            size="mini"
            @click="addDataDialog = true"
          >新增</el-button>
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
          width="150"
        ></el-table-column>
        <el-table-column label="apis">
          <template slot-scope="scope">
            <el-tag
              size="mini"
              v-for="item in scope.row.apis"
              :key="item._id"
              style="margin: 0 2px"
            >{{ item.alias }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="menus">
          <template slot-scope="scope">
            <el-tag
              size="mini"
              v-for="item in scope.row.menus"
              :key="item._id"
              style="margin: 0 2px"
            >{{ item.title }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="buttons">
          <template slot-scope="scope">
            <el-tag
              size="mini"
              v-for="item in scope.row.buttons"
              :key="item._id"
              style="margin: 0 2px"
            >{{ item.name }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          width="200"
        >
          <template slot-scope="scope">{{
            new Date(scope.row.createdAt) | date_format
          }}</template>
        </el-table-column>
        <el-table-column
          label="编辑"
          width="200"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              @click="
                () => {
                  editDataForm = JSON.parse(JSON.stringify(scope.row));
                  editDataDialog = true;
                  $nextTick(() => {
                    $refs.tree.setCheckedNodes(scope.row.menus);
                  });
                }
              "
            >编辑</el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="removeData(scope.row)"
            >删除</el-button>
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
          prop="alias"
        >
          <el-input v-model="addDataForm.alias"></el-input>
        </el-form-item>
        <el-form-item label="apis">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="(item, index) in addDataForm.apis"
              :key="item._id"
              style="margin: 0 2px"
              closable
              @close="
                (e) => {
                  addDataForm.apis.splice(index, 1);
                }
              "
            >{{ item.alias }}</el-tag>
          </div>
          <el-popover
            placement="top"
            width="600"
            v-model="addChooseApiVisible"
          >
            <chooseApi
              :choosed="addDataForm.apis"
              @choose="
                (e) => {
                  addDataForm.apis.push(e);
                }
              "
            />
            <el-button slot="reference">请选择</el-button>
          </el-popover>
        </el-form-item>
        <el-form-item label="按钮">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="(item, index) in addDataForm.buttons"
              :key="item._id"
              style="margin: 0 2px"
              closable
              @close="
                (e) => {
                  addDataForm.buttons.splice(index, 1);
                }
              "
            >{{ item.name }}</el-tag>
          </div>
          <el-popover
            placement="top"
            width="600"
            v-model="addChooseButtonVisible"
          >
            <chooseButton
              :choosed="addDataForm.buttons"
              @choose="
                (e) => {
                  addDataForm.buttons.push(e);
                }
              "
            />
            <el-button slot="reference">请选择</el-button>
          </el-popover>
        </el-form-item>
        <el-form-item label="菜单">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="item in addDataForm.menus"
              :key="item._id"
              style="margin: 0 2px"
            >{{ item.title }}</el-tag>
          </div>
          <el-tree
            ref="tree"
            :data="menuTree"
            show-checkbox
            node-key="_id"
            :highlight-current="true"
            :default-expand-all="true"
            :expand-on-click-node="false"
            @check-change="
              () => {
                addDataForm.menus = $refs.tree.getCheckedNodes(false, true);
              }
            "
          >
            <span
              class="flex justify-between align-center"
              style="flex: 1"
              slot-scope="{ data }"
            >
              <span>{{ data.title }}</span>
              <span>{{ data.remarks }}</span>
            </span>
          </el-tree>
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
          prop="alias"
        >
          <el-input v-model="editDataForm.alias"></el-input>
        </el-form-item>
        <el-form-item label="apis">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="(item, index) in editDataForm.apis"
              :key="item._id"
              style="margin: 0 2px"
              closable
              @close="
                (e) => {
                  editDataForm.apis.splice(index, 1);
                }
              "
            >{{ item.alias }}</el-tag>
          </div>
          <el-popover
            placement="top"
            width="600"
            v-model="editChooseApiVisible"
          >
            <chooseApi
              :choosed="editDataForm.apis"
              @choose="
                (e) => {
                  editDataForm.apis.push(e);
                }
              "
            />
            <el-button slot="reference">请选择</el-button>
          </el-popover>
        </el-form-item>
        <el-form-item label="按钮">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="(item, index) in editDataForm.buttons"
              :key="item._id"
              style="margin: 0 2px"
              closable
              @close="
                (e) => {
                  editDataForm.buttons.splice(index, 1);
                }
              "
            >{{ item.name }}</el-tag>
          </div>
          <el-popover
            placement="top"
            width="600"
            v-model="addChooseButtonVisible"
          >
            <chooseButton
              :choosed="editDataForm.buttons"
              @choose="
                (e) => {
                  editDataForm.buttons.push(e);
                }
              "
            />
            <el-button slot="reference">请选择</el-button>
          </el-popover>
        </el-form-item>
        <el-form-item label="菜单">
          <div style="min-height: 24px">
            <el-tag
              size="mini"
              v-for="item in editDataForm.menus"
              :key="item._id"
              style="margin: 0 2px"
            >{{ item.title }}</el-tag>
          </div>
          <el-tree
            ref="tree"
            :data="menuTree"
            show-checkbox
            node-key="_id"
            :highlight-current="true"
            :default-expand-all="true"
            :expand-on-click-node="false"
            @check-change="
              () => {
                editDataForm.menus = $refs.tree.getCheckedNodes(false, true);
              }
            "
          >
            <span
              class="flex justify-between align-center"
              style="flex: 1"
              slot-scope="{ data }"
            >
              <span>{{ data.title }}</span>
              <span>{{ data.remarks }}</span>
            </span>
          </el-tree>
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
import chooseApi from './choose_api'
import chooseButton from './choose_button'
export default {
  name: 'permission',
  components: { chooseApi, chooseButton },
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
        alias: '',
        apis: [],
        menus: [],
        buttons: [],
      },
      editDataDialog: false,
      editDataForm: {
        alias: '',
        apis: [],
        menus: [],
        buttons: [],
      },
      addRules: {
        alias: [{ required: true, message: '请输入名称', trigger: 'blur' }]
      },
      editRules: {
        alias: [{ required: true, message: '请输入名称', trigger: 'blur' }]
      },
      menuTree: [],
      addChooseApiVisible: false,
      editChooseApiVisible: false,
      addChooseButtonVisible: false,
      editChooseButtonVisible: false
    }
  },
  mounted () {
    this.getData()
    this.getMenuTree()
  },
  methods: {
    checkChange () {
      this.addDataForm.menus = this.$refs.tree.getCheckedNodes(false, true)
    },
    getMenuTree () {
      this.$api.get_menu_menutree().then(res => {
        console.log(res.data)
        this.menuTree = res.data
      })
    },
    getData () {
      this.loading = true
      this.$api.get__permission({
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
        this.$api.delete_permission_id({ id: data._id }).then(res => {
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
    addData () {
      this.$refs.addDataForm.validate((valid) => {
        if (valid) {
          this.$api.post__permission({
            alias: this.addDataForm.alias,
            apis: this.addDataForm.apis,
            menus: this.addDataForm.menus,
            buttons: this.addDataForm.buttons,
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
    editData () {
      this.$refs.editDataForm.validate((valid) => {
        if (valid) {
          this.$api.put_permission_id({
            id: this.editDataForm._id,
            alias: this.editDataForm.alias,
            apis: this.editDataForm.apis,
            menus: this.editDataForm.menus,
            buttons: this.editDataForm.buttons,
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
