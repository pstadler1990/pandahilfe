<template>
    <div>
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
        width: calc(100% - 2em)
        padding: 1em
        border-radius: 2px
        h1
            color: darken($color-theme-past2, 50%)
            text-align: center
        .header-info
            font-size: 90%
            padding: 1em
            border-radius: 2px

</style>