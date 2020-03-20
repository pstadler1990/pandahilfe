<template>
    <div id="app">
        <div class="pure-g main-panel">

            <router-view/>

            <footer class="pure-u-1">
                <div class="pure-u-1 pure-u-md-1-3">
                    <h4>Fragen? Mitmachen? <a href="mailto: pandahilfe-rgb@gmx.de">pandahilfe-rgb@gmx.de</a></h4>
                </div>
                <div class="pure-u-1 pure-u-md-1-3">
                    <router-link to="/impressum">Impressum und Datenschutz</router-link>
                </div>
                <div class="pure-u-1 pure-u-md-1-3">
                    Dieses Projekt ist Open Source (<a href="https://github.com/pstadler1990/pandahilfe">Github</a>)
                </div>

                <!-- Supporters -->
                <div class="pure-u-1" v-if="false">
                    Unterstützer*innen
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
    }
</script>

<style lang="sass">
    @import "~purecss-sass"
    @import "src/assets/colors"
    @import "src/assets/global"

    body
        background: $color-theme-alt

    #app
        font-size: 100%

    @media screen and (min-width: 80em)
        .main-panel
            width: 50%
            margin: 0 auto

    a
        color: $color-theme-main
        font-weight: bold
        border-bottom: 2px solid $color-theme-main
        text-decoration: none

    .required-info
        font-weight: bold

    .error-info
        display: block
        background: $color-error
        padding: .25em
        border-radius: 3px
        border: 1px solid darken($color-error, 20%)

    footer
        padding: 1em
        font-size: 70%
        text-align: center

    .pure-button-primary
        background: $color-theme-past1

</style>
