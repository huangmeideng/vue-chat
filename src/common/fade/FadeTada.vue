<template>
    <transition name="cui">
        <slot></slot>
    </transition>   
</template>

<script>
export default {
    name: 'FadeTada'
}
</script>

<style scoped>
    .cui-enter {
        animation: bounceInRight .5s;
    }
    .cui-leave-active {
        animation: bounceInLeft .5s;
    }
</style>

