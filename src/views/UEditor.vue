<template>
  <div>
    <vue-neditor-wrap v-model="content"
                      :config="config"
                      :destroy="false"
                      @ready="ready"></vue-neditor-wrap>
  </div>
</template>

<script>
import VueNeditorWrap from 'vue-neditor-wrap'

export default {
  components: {
    VueNeditorWrap
  },
  data() {
    return {
      config: {
        serverUrl: '/api/web/upload/ueditor', // 如果需要上传功能,找后端小伙伴要服务器接口地址
        UEDITOR_HOME_URL: '/NEditor/', // 你的UEditor资源存放的路径,相对于打包后的index.html
        autoHeightEnabled: false, // 编辑器不自动被内容撑高
        initialFrameHeight: 240, // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
        enableAutoSave: false // 关闭自动保存
      },
      content: ''
    }
  },
  methods: {
    ready(edotor) {
      console.log(`🔊: ready -> edotor`, edotor)
    }
  }
}
</script>
