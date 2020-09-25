<template>
  <div class="page">
    <div class="my-2">
      <v-btn depressed large>Normal</v-btn>
    </div>
    <div class="my-2">
      <v-btn depressed large color="primary">Primary</v-btn>
    </div>
    <div class="my-2">
      <v-btn depressed large color="error">Error</v-btn>
    </div>
    <div class="my-2">
      <v-btn depressed large disabled>Disabled</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
  .page{
    color: black;
    line-height: 1;
  }
</style>
