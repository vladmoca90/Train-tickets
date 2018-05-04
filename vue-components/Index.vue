<template>
    <div id="app">
        <header />
        <content />
        <selectionButtons />
    </div>
</template>
<script>
import header from 'header.vue'

export default {
    name: 'app',
    components: {
        header,
        content,
        selectionButtons,
    },
}
</script>
<style scoped>

</style>