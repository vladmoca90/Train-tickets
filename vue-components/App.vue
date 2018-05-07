<template>
    <div id="app">
        <headerComp></headerComp>
        <contentComp></contentComp>
        <footerComp></footerComp>
    </div>
</template>
<script>
import headerComp from './headerComp.vue'
import contentComp from './contentComp.vue'
import footerComp from './footerComp.vue'

export default {
    name: 'app',
    components: {
        headerComp,
        contentComp,
        footerComp,
    },
}
</script>
<style lang="scss" scoped>

</style>