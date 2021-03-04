<template>
  <div class="page d-flex flex-wrap justify-lg-space-between">
    <span v-for="(item, index) in iconList" :key="index" @click="copy(item)" :data-clipboard-text="item" :class="'copy' + item">
      <v-icon large>{{item}}</v-icon>
      <span>{{item}}</span>
    </span>
    <v-snackbar v-model="snackbar" :multi-line="true" top right color="success" :timeout="1000">
      复制成功
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import {iconArr} from '@/assets/icon'
import ClipboardJS from 'clipboard'
export default {
  name: 'icon',
  data () {
    return {
      iconList: iconArr,
      snackbar: false
    }
  },
  created () {
    console.log('icon')
  },
  methods: {
    copy (cls) {
      let _this = this
      let ClipboardJSObj = new ClipboardJS('.copy' + cls)
      ClipboardJSObj.on('success', function(e) {
        e.clearSelection();
        _this.snackbar = true
      });
    }
  }
}
</script>

<style scoped lang="scss">
.page{
  >span{
    display: inline-flex;
    width: 220px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    cursor: pointer;
    span{
      font-size: 14px;
    }
  }
}
</style>
