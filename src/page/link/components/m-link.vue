<template>
  <v-card :hover="true" :width="200" v-ripple :elevation="elevation" :dark="dark" @mouseenter="hover" @mouseleave="leave"
          @click="jump">
    <v-card-title>
      <span>{{info.name}}</span>
      <v-spacer></v-spacer>
      <span class="url-img" v-if="info.img">
        <img :src="require('../../../assets/img/' + info.img + '.png')" class="url-img">
      </span>
      <v-icon v-else>mdi-arrow-right-bold</v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
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
    jump () {
      let {url} = this.info
      window.open(url)
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
