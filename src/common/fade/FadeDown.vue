<template>
    <transition name="cui">
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'FadeDown'
}
</script>

<style scoped>
    .cui-enter-active {
        animation: fadeInDown .5s;
    }
    .cui-leave-active {
        animation: fadeOutDown .5s;
    }
</style>

