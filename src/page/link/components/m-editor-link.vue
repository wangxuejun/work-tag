<template>
  <v-card :hover="true" :width="200" v-ripple :elevation="elevation" :dark="dark" @mouseenter="hover" @mouseleave="leave"
          @click="copy('copyBat' + info.url)" :class="'copyBat' + info.url" data-clipboard-target="copyDom" data-clipboard-text="221131312">
    <v-card-title>
      <span>{{info.name}}</span>
      <v-spacer></v-spacer>
      <span class="url-img" v-if="info.img">
        <img :src="require('../../../assets/img/' + info.img + '.png')" class="url-img">
      </span>
      <v-icon v-else>{{info.icon? info.icon: 'mdi-arrow-right-bold'}}</v-icon>
    </v-card-title>
    <v-snackbar v-model="snackbar" :multi-line="true" bottom left color="success" :timeout="1000">
      复制成功
    </v-snackbar>
  </v-card>
</template>

<script>
import ClipboardJS from "clipboard";
export default {
  name: 'm-link',
  props: {
    info: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      elevation: 4,
      snackbar: false
    }
  },
  computed: {
    dark () {
      return this.Global.dark
    }
  },
  methods: {
    copy (cls) {
      let _this = this
      let ClipboardJSObj = new ClipboardJS('.' + cls)
      ClipboardJSObj.on('success', function(e) {
        e.clearSelection();
        _this.snackbar = true
      });
      this.$emit('onOpenCmd')
    },
    hover () {
      this.elevation = 20
    },
    leave () {
      this.elevation = 4
    }
  }
}
</script>

<style scoped lang="scss">
.url-img{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  position: relative;
  overflow: hidden;
  img{
    width: auto;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
