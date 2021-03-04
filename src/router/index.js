import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes:[
    {
      name: 'link',
      path: '/link',
      meta: {
        title: '我的标签',
        icon: 'mdi-link-box-variant'
      },
      component: resolve => require(['@/page/link/index'], resolve)
    },
    {
      name: 'prize',
      path: '/prize',
      meta: {
        title: '我的笔记',
        icon: 'mdi-notebook-edit'
      },
      component: resolve => require(['@/page/prize'], resolve),
      children: [
        // 商户参加页面
        {
          name: 'wish',
          path: '/prize/wish',
          meta: {
            title: '我的愿望',
            icon: 'mdi-email'
          },
          component: resolve => require(['@/page/wish'], resolve),
        }
      ]
    },
    {
      name: 'helper',
      path: '/helper',
      meta: {
        title: '工作目录',
        icon: 'mdi-hand'
      },
      component: resolve => require(['@/page/helper/index'], resolve),
    },
    // {
    //   name: 'icon',
    //   path: '/icon',
    //   meta: {
    //     title: '我的Icon',
    //     icon: 'mdi-evernote'
    //   },
    //   component: resolve => require(['@/page/icon/index'], resolve)
    // }
  ]
})
