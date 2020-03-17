<template>
    <div class="pure-g main-panel">
        <header class="pure-u-1">
            <h1>Corona-Nachbarschaftshilfe Regensburg</h1>
            <div class="header-info">
                <p>Dieses Webportal soll Hilfesuchende, die aufgrund des <b>Coronavirus</b> Hilfe benötigen und Helfer*innen aus Regensburg (Stadt) und Landkreis zusammenbringen.</p>
                <p>WICHTIG: Dieses Portal dient <u>nicht für Notrufe</u>! Sollten Sie Beschwerden haben, kontaktieren Sie bitte die zuständigen Behörden.</p>
            </div>
        </header>

        <div class="pure-u-1">
            <SearchHome />
        </div>
        <div class="pure-u-1 pure-u-lg-1-2">
            <OfferHome />
        </div>

        <div class="pure-u-1 pure-u-lg-1-2">
            <DeleteHome />
        </div>

        <footer class="pure-u-1">

            <div class="pure-u-1 pure-u-md-1-3">
                <h4>Fragen? Mitmachen? <a href="mailto: pstadler90@gmx.de">pstadler90@gmx.de</a></h4>
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                Mit freundlicher Hilfe von:
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                Dieses Projekt ist Open Source (<a href="https://github.com/pstadler1990/pandahilfe">Github</a>)
            </div>


        </footer>
    </div>
</template>

<script>
    import SearchHome from '../components/search_home'
    import OfferHome from '../components/offer_home'
    import DeleteHome from "../components/delete_home";

    export default {
        name: "Home",
        components: {
            DeleteHome,
            SearchHome,
            OfferHome
        }
    }
</script>

<style scoped lang="sass">
    @import "src/assets/colors"

    @media screen and (min-width: 80em)
        .main-panel
            width: 50%
            margin: 0 auto

    .search-home, .offer-home, .delete-home
        padding: 1em
        border-radius: 2px
        margin: 1em

    .search-home
        box-shadow: 0 10px 10px rgba(0, 0, 0, .5)

    .search-home
        background: $color-theme-past1
        position: relative

    .offer-home
        background: lighten($color-theme-main, 50%)
        position: relative

    .delete-home, .header-info
        background: rgba(255, 255, 255, .8)

    header
        padding: 1em
        h1
            padding: .1em
            color: darken($color-theme-past2, 50%)
            text-align: center
        .header-info
            font-size: 90%
            padding: 1em
            border-radius: 2px

    footer
        padding: 1em
        font-size: 70%
        text-align: center
</style>