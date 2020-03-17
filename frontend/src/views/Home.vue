<template>
    <div class="pure-g main-panel">
        <div class="pure-u-1">
            <SearchHome />
        </div>
        <div class="pure-u-1">
            <OfferHome />
        </div>
    </div>
</template>

<script>
    import SearchHome from '../components/search_home'
    import OfferHome from '../components/offer_home'

    export default {
        name: "Home",
        components: {
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

    .search-home, .offer-home
        padding: 1em
        border-radius: 2px
        margin: 1em

    .search-home
        background: $color-theme-past1
        border: 1px solid darken($color-theme-past1, 30%)
        position: relative

    .offer-home
        background: lighten($color-theme-main, 40%)
        border: 1px solid darken($color-theme-main, 30%)
        position: relative
</style>