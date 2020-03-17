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

  .required-info
    font-weight: bold

  .error-info
    display: block
    background: $color-error
    padding: .25em
    border-radius: 3px
    border: 1px solid darken($color-error, 20%)

</style>
