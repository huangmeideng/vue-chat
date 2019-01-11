<template>
    <transition name="cui">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'FadeBounce'
}
</script>

<style scoped>
    .cui-enter-active {
        animation: bounceInRight .5s;
    }
    .cui-leave-active {
        animation: bounceOutLeft .5s;
    }
</style>

