<template>
    <div class="container">
        <my-info></my-info>
        <my-list></my-list>
    </div>
</template>

<script>
import MyInfo from './MyInfo'
import MyList from './MyList'
export default {
    name: "My",
    components: {
        MyInfo,
        MyList
    }
}
</script>

<style scoped>

</style>

