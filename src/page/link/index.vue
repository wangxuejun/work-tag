<template>
  <div class="page">
    <div v-for="(item, index) in list" :key="index">
      <m-title :title="item.title"></m-title>
      <v-row v-if="item.type === 'editor'">
        <v-col cols="4">
          <v-text-field label="域名" v-model="href"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-select :items="ports" v-model="port" label="端口" append-outer-icon="mdi-usb-por" clearable></v-select>
        </v-col>
      </v-row>
      <v-row justify="start">
        <v-col v-for="(mitem, mindex) in item.arr" :key="mindex" align-self="start" class="flex-grow-0">
          <m-link :info="mitem" v-if="item.type === 'link'"></m-link>
          <m-editor-link :info="mitem" v-if="item.type === 'editor'" @onOpenCmd="doOpenCmd"></m-editor-link>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
import {apiOpenCmd} from '@/api/base'
export default {
  name: 'linkComponent',
  components: {
    'm-title': () => import('./components/m-title'),
    'm-link': () => import('./components/m-link'),
    'm-editor-link': () => import('./components/m-editor-link')
  },
  data () {
    return {
      href: '',
      port: 8080,
      ports: [8080, 8081, 8082, 8083, 8084, 8085, 8086, 8087, 8088],
      list: [
        {
          title: '常用网站',
          type: 'link',
          arr: [
            {
              name: '谷歌',
              url: 'https://www.google.com/',
              img: 'google'
            },
            {
              name: '百度',
              url: 'https://www.baidu.com/',
              img: 'baidu2'
            },
            {
              name: '百度翻译',
              url: 'https://fanyi.baidu.com/',
              img: 'translate'
            },
            {
              name: '时间戳',
              url: 'https://tool.lu/timestamp',
              img: 'time'
            },
            {
              name: 'GitHub',
              url: 'https://github.com/',
              img: 'github'
            },
            {
              name: 'Vant-UI',
              url: 'https://youzan.github.io/vant/#/zh-CN/button',
              img: 'vant'
            },
            {
              name: 'WS激活码',
              url: 'http://idea.medeming.com/jets/',
              img: ''
            },
          ]
        },
        {
          title: '工作',
          type: 'link',
          arr: [
            {
              name: '蓝湖',
              url: 'https://lanhuapp.com/web/#/item',
              img: 'lanhu'
            },
            {
              name: 'Jenkins',
              url: 'http://jenkins.km-union.com/',
              img: 'jenkins'
            },
            {
              name: 'JIRA',
              url: 'http://jira.km-union.com/secure/Dashboard.jspa'
            },
            {
              name: 'RAP2',
              url: 'http://192.168.1.182:3002/repository/all'
            },
            {
              name: 'Gitlab',
              url: 'http://gitlab.km-union.com/root'
            },
          ]
        },
        // {
        //   title: '公众号开发',
        //   type: 'editor',
        //   arr: [
        //     {
        //       name: '打开cmd窗口',
        //       url: '/invest',
        //       icon: 'mdi-content-cut',
        //     }
        //   ]
        // },
        {
          title: 'UAT后台管理',
          type: 'link',
          arr: [
            {
              name: '总后台',
              url: 'http://uatadm.km-union.com/#/admin/index'
            },
            {
              name: '前台',
              url: 'http://uat.km-union.com/#/login?rediUrl=index'
            },
            {
              name: '珂蓝会务',
              url: 'http://confuat.km-union.com/#/login?rediUrl=index'
            }
          ]
        },
        {
          title: 'PRD后台管理',
          type: 'link',
          arr: [
            {
              name: '总后台',
              url: 'https://saasadmin.km-union.com/#/admin/index'
            },
            {
              name: '前台',
              url: 'http://saas.km-union.com/#/login?rediUrl=index'
            },
            {
              name: '珂蓝会务',
              url: 'http://conf.km-union.com/#/login?rediUrl=index'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.href = location.hostname
  },
  computed: {
    dark () {
      return this.Global.dark
    }
  },
  methods: {
    doOpenCmd () {
      apiOpenCmd().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
