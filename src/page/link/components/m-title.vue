<template>
  <div class="m-title">
    <v-row>
      <v-col class="text-h5">{{title}}</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'm-title',
  props: {
    title: {
      type: String,
      default: '栏目标题'
    }
  }
}
</script>

<style scoped lang="scss">
.m-title{

}
</style>
