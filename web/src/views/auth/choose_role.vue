<template>
  <div>
    <div style="margin: 15px 0">
      <el-table :data="data.docs" style="width: 100%" size="mini" stripe border>
        <el-table-column
          align="center"
          prop="alias"
          label="名称"
          width="150"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="industry.name"
          label="行业"
          width="150"
        ></el-table-column>
        <el-table-column align="center" label="创建时间">
          <template slot-scope="scope">{{
            new Date(scope.row.createdAt) | date_format
          }}</template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              type="text"
              :disabled="
                !!choosed.find((e) => {
                  return e._id === scope.row._id;
                })
              "
              size="mini"
              @click="choose(scope.row)"
              >选择</el-button
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
  </div>
</template>

<script>

export default {
  name: 'chooseRole',
  props: {
    choosed: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      search: '',
      loading: false,
      pagination: {
        page: 1,
        limit: 5,
        totalDocs: 0
      },
      data: {
        docs: []
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$api.get__role({
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
    choose (data) {
      if (!this.choosed.find(e => {
        return e._id === data._id
      })) {
        this.$emit('choose', data)
      }
    }
  }
}
</script>
