<template>
  <v-app if="app">
    <!--左侧导航-->
    <v-navigation-drawer app class="accent-4" permanent width="220" :expand-on-hover="false" :dark="dark">
      <div style="height: 48px;">
        <v-row justify="space-around" style="height: 48px;" align="center">
          <v-icon size="40" color="orange" @click="toggleMood">{{dark? mood[currentMood] + '-outline': mood[currentMood]}}</v-icon>
        </v-row>
      </div>
      <!--菜单-->
      <v-list :subheader="true">
        <template v-for="(item, index) in routes">
          <!--一级菜单-->
          <v-list-item :key="item.title" link :exact="true" :to="item.path" v-if="!item.children" @click="clikLink(item, index)" :color="linkColor">
            <v-list-item-icon>
              <v-icon :dark="dark">{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!--二级菜单-->
          <v-list-group :key="item.title" no-action v-else v-model="item.isOpen" :color="linkColor">
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon :dark="dark">{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link v-for="mitem in item.children" :key="mitem.title" :to="mitem.path" @click="clikLink(mitem, index)">
              <v-list-item-content>
                <v-list-item-title>{{mitem.title}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon dense :dark="dark">{{mitem.icon}}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!--顶部导航-->
    <v-app-bar dense app :clipped-left="false" :dark="dark" :color="dark? '': 'white'">
      <v-toolbar-title>{{pageTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-switch v-model="Global.dark" :dark="dark" :prepend-icon="dark? 'mdi-islam': 'mdi-white-balance-sunny'" dense style="height: 20px"></v-switch>
      </div>
    </v-app-bar>
    <!--主视图-->
    <v-main>
      <v-container fluid>
        <keep-alive :include="includeRouterNames">
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import router from './router'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      pageTitle: '',
      routes: [],
      includeRouterNames: 'icon',
      mood: ['mdi-emoticon-cool', 'mdi-emoticon-dead', 'mdi-emoticon', 'mdi-emoticon-angry', 'mdi-emoticon-confused',
              'mdi-emoticon-cry', 'mdi-emoticon-devil', 'mdi-emoticon-excited',
              'mdi-emoticon-frown', 'mdi-emoticon-happy', 'mdi-emoticon-kiss', 'mdi-emoticon-lol', 'mdi-emoticon-sick',
              'mdi-emoticon-poop'],
      currentMood: 0
    }
  },
  computed: {
    // 激活样式
    linkColor () {
      return this.dark? '#69F0AE': '#00B0FF'
    },
    dark () {
      return this.Global.dark
    }
  },
  created () {
    this.initRoutes()
  },
  methods: {
    // 初始化导航配置
    initRoutes () {
      let routes = router.options.routes
      routes.forEach(item => {
        let {path, children} = item
        let {icon, title} = item.meta
        let config = {title, icon, path}
        config.level = 1
        config.isOpen = false
        if (children) {
          // 二级导航
          config.children = []
          children.forEach(mitem => {
            let {path} = mitem
            let {icon, title} = mitem.meta
            config.children.push({title, icon, path, level: 2})
          })
        }
        this.routes.push(config)
      })
    },
    // 点击菜单时触发
    clikLink (item, index) {
      this.routes.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false
        }
      })
    },
    toggleMood () {
      let len = this.mood.length - 1
      if (this.currentMood < len) {
        this.currentMood++
      } else {
        this.currentMood = 0
      }
    }
  },
  watch: {
    // 设置面包屑
    $route: {
      handler: function(val){
        this.pageTitle = ''
        let {matched} = val
        matched.forEach((item, index) => {
          this.pageTitle += item.meta.title
          if (index < matched.length - 1) {
            this.pageTitle += ' / '
          }
        })
      },
      // 深度观察监听
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/color.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::v-deep .mdi-white-balance-sunny::before{
  color: $permary-color!important;
}
::v-deep .mdi-islam::before{
  color: $dark-color!important;
}
</style>
