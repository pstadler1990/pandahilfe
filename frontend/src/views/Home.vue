<template>
    <div class="pure-g center-both">
        <div class="pure-u-1 pure-u-md-1-2">
            <SearchHome />
        </div>
        <div class="pure-u-1 pure-u-md-1-2">
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

    .search-home, .offer-home
        padding: 1em
        border-radius: 2px
        margin: 1em

    .search-home
        background: $color-theme-past1
        border: 1px solid darken($color-theme-past1, 30%)

    .offer-home
        background: lighten($color-theme-main, 40%)
        border: 1px solid darken($color-theme-main, 30%)
</style>