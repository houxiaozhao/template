<template>
  <d2-container>
    <template slot="header">Page 3 header</template>
    <el-upload
      drag
      :action="VUE_APP_API + 'file/upload'"
      :headers="{ Authorization: token }"
      :limit="1"
      :on-exceed="
              (e) => {
                $message.warning(
                  `只能上传一个文件，请先把文件 ${e[0].name} 移除`
                );
              }
            "
      :on-success="
              (response) => {
                file = response.data;
              }
            "
      :on-remove="
              () => {
                file = '';
              }
            "
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将附件拖到此处，或<em>点击上传</em>
      </div>
    </el-upload>
    <el-upload
      :action="VUE_APP_API + 'file/upload'"
      class="upload-demo"
      multiple
      :headers="{ Authorization: token }"
      accept="image/*"
      :file-list="fileList"
      list-type="picture-card"
      :on-success="
                (response, file, fileList) => {
                  form.deviceInfo.images.push(response.data);
                }
              "
      :on-remove="
                (file, fileList) => {
                  form.deviceInfo.images = fileList.map((e) => e.response.data);
                }
              "
    >
      <i class="el-icon-plus"></i>
      <!-- <el-button size="small" type="primary">点击上传</el-button> -->
    </el-upload>
  </d2-container>
</template>

<script>
import util from '@/libs/util'

export default {
  name: 'page3',
  data () {
    return {
      token: 'Bearer ' + util.cookies.get('token'),
      fileList: []
    }
  }
}
</script>
