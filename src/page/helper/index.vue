<template>
  <div>
    <v-row v-for="(item, index) in list" :key="index">
      <v-col>
        <v-card width="600" hover @click="run(index)">
          <v-card-title>
            <v-icon class="mr-4">{{item.type === 'directory'? 'mdi-folder': 'mdi-file'}}</v-icon>
            <span>{{item.name}}</span>
            <v-spacer></v-spacer>
            <v-icon>mdi-play</v-icon>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {apiRunItem} from '@/api/base'
export default {
  name: 'helper',
  data () {
    return {
      text: '',
      list: []
    }
  },
  created () {
    // apiGEtText().then(res => {
    //   console.log(res.data.length)
    //   this.text = res.data.replace(/(\r\n|\n|\r)/gm, "<br />")
    //   this.text = res.data.replace(/(\t)/gm, "&nbsp;")
    //   console.log(this.text)
    // })
    // apiGetCatalog().then(res => {
    //   console.log(res)
    //   this.list = res.data
    // })11111
  },
  methods: {
    run (index) {
      let path = this.list[index].name
      apiRunItem({path}).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
