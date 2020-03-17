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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap')

    body
        background: lighten($color-theme-past2, 10%)

    #app
        font-size: 100%

    a
        color: $color-theme-alt
        font-weight: bold
        border-bottom: 2px solid $color-theme-alt
        text-decoration: none

    html, button, input, select, textarea,
    .pure-g [class *= "pure-u"]
        font-family: 'Roboto', sans-serif

    .required-info
        font-weight: bold

    .error-info
        display: block
        background: $color-error
        padding: .25em
        border-radius: 3px
        border: 1px solid darken($color-error, 20%)

</style>
