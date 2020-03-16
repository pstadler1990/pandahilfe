<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="sass">
  @import "~purecss-sass"
  @import "src/assets/colors"
  @import "src/assets/global"

  #app
    font-size: 120%

</style>
