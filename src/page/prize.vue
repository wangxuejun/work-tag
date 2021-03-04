<template>
  <div>
    <div class="my-2">
      <v-btn depressed large>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn depressed large color="primary">Primary</v-btn>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'prize'
}
</script>

<style scoped lang="scss">

</style>
